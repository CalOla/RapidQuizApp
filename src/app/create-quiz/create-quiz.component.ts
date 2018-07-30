import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  myForm: FormGroup;
   
  //Form state
	loading = false;
  success = false;
	
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      quizName: '',
      description: '',
      access:'',
	    groups:'', //get all groups check boxes to select
	    numOfQ:'',
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

  addQuestion() {
      const quiz = this.fb.group ({ 
      question: [],
      answer: [],
      'a': [],
      'b': [],
      'c': [],
      'd': []
    });

    this.quizForms.push(quiz);
	  console.log(this.myForm.value);
  }
    
  deleteQuestion(i) {
    this.quizForms.removeAt(i)
  }
	
  postQuiz() {
	  let obs = this.http.post('http://localhost:3000/quiz', {observe:'response'}).subscribe(
      (resp) => {console.log(resp), this.router.navigate(['/takeQ']);},
      error => console.log('There was an error creating the quiz')
    )
  }
	
  async submitHandler() {
	  this.loading = true;
	  this.postQuiz;
	  this.success = true;
  }

}