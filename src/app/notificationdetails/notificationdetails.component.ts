import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-notificationdetails',
  templateUrl: './notificationdetails.component.html',
  styleUrls: ['./notificationdetails.component.scss']
})
export class NotificationdetailsComponent implements OnInit {

  quiz$ : Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.quiz$ = params.id );
  }

  ngOnInit() {
    this.data.getQuizById(this.quiz$).subscribe(
      data => this.quiz$ = data
    );
	  
	 console.log(this.quiz$)
  }

}
