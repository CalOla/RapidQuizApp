import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})

export class QuizViewComponent implements OnInit {

  quiz$ : Object;
  myForm: FormGroup;
  score: number;
  scoreString: string;

  constructor(private route: ActivatedRoute, private data: DataService, private fb: FormBuilder) {
    this.route.params.subscribe( params => this.quiz$ = params.id );
  }

  ngOnInit() {
  this.score = 0;
  this.scoreString = "";
  
    this.data.getQuizView(this.quiz$).subscribe(
      data => {
		  this.quiz$ = data;
//		  this.addQuizzes(this.quiz$);
		  for(let i = 0; i < this.quiz$.quizzes.length; i++) {
			  this.addQuizzes(this.quiz$.quizzes[i]);
		  }
		  console.log(this.quiz$.quizzes);
	  }
    );
	  
	this.myForm = this.fb.group({
		ans: this.fb.array([])
	});
	  
  }
	
  addQuizzes(q) {
	  const answ = this.fb.group({
		  question: q.question,
		  a: q.a,
		  b: q.b,
		  c: q.c,
		  d: q.d,
		  answer: q.answer,
		 option: '',
	  });
	  this.answerForms.push(answ);
	  console.log(this.answerForms.value);
  }
	
  addAnswer(i) {
	  const answ = this.fb.group({
		 option: [] 
	  });
	  this.answerForms.push(answ);
  }
	
  get answerForms() {
	  return this.myForm.get('ans') as FormArray
  }
	
  submitQuiz() {
	  let count = 0;
	  for(let i = 0; i < this.answerForms.length; i++) {
		  if(this.answerForms.value[i].answer == this.answerForms.value[i].option) {
        count++;
		  }
	  }
//	  console.log((count/this.answerForms.length)*100 );
	  console.log(this.score)
    this.score = (count/this.answerForms.length)*100;
    this.scoreString = "Score: " + this.score + "%";
  }

}