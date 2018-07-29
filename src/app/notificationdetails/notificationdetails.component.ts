import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-notificationdetails',
  templateUrl: './notificationdetails.component.html',
  styleUrls: ['./notificationdetails.component.scss']
})
export class NotificationdetailsComponent implements OnInit {

  notification$ : Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.notification$ = params.id );
  }

  ngOnInit() {
    this.data.getNotificationById(this.notification$).subscribe(
      data => this.notification$ = data
    );
	  
	  console.log(this.notification$)
  }

}
