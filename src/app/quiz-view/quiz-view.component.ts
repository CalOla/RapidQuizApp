import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent implements OnInit {

  quiz$ : Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.quiz$ = params.id );
  }

  ngOnInit() {
    this.data.getQuizView(this.quiz$).subscribe(
      data => this.quiz$ = data
    );
	  
	  console.log(this.quiz$);
  }

}
