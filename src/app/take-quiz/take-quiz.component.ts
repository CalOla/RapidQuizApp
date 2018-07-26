import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss']
})
export class TakeQuizComponent implements OnInit {
    
  quiz$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
      this.data.getQuiz().subscribe(
      data => this.quiz$ = data
      );
  }

}
