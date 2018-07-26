import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

   myForm: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      quizName: '',
      description: '',
      access:'',
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
          
//      options : this.fb.array([
//          this.fb.group({
//              optionsList: []
//          })
//      ])
      
    });
      
    

    this.quizForms.push(quiz);
//    this.quizForms.push(options)
  }
    
//  addOption() {
//
//    const option = this.fb.group({ 
//      option: []
//    })
//    this.optionForms.push(option);
//  }

  deleteQuiz(i) {
    this.quizForms.removeAt(i)
  }
    
//  deleteOption(i) {
//    this.optionForms.removeAt(i)
//  }

}