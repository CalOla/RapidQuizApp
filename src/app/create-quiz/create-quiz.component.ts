import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

   myForm: FormGroup;
   
//	Form state
	loading = false;
  	success = false;
	
  

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      quizName: '',
      description: '',
      access:'',
	  groups:'', //get all groups check boxes to select
	  numOfQ:this.numberOfQuiz,
      quizzes: this.fb.array([]),
    })
  
      this.myForm.valueChanges.subscribe(console.log)
  }

  get quizForms() {
    return this.myForm.get('quizzes') as FormArray
  }
    
  get optionForms() {
    return this.quizForms.get('options') as FormArray
  }

  addQuiz() {
      const quiz = this.fb.group ({ 
      question: [],
      answer: [],
      choices: [],
      'a. ': [],
      'b. ': [],
      'c. ': [],
      'd. ': []
      
    });

    this.quizForms.push(quiz);
	  console.log(this.myForm.value);
  }
    


  deleteQuiz(i) {
    this.quizForms.removeAt(i)
  }
	
  get numberOfQuiz() {
	  
	  return this.numOfQuiz;
  }
	
  postQuiz() {
	  let obs = this.http.post('http://localhost:3000/quiz', this.myForm.value).subscribe((data)=>{console.log(data)})
  }
	
  async submitHandler() {
	  this.loading = true;
	  this.postQuiz;
	  this.success = true;
  }

}