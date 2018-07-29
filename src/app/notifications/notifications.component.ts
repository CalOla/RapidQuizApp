import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notification$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getNotifications().subscribe(
      data => this.notification$ = data
    );
  }

}
