import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  quiz$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getQuiz().subscribe(
      data => this.quiz$ = data
    );
  }

}
