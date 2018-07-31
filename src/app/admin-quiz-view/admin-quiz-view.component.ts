import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-quiz-view',
  templateUrl: './admin-quiz-view.component.html',
  styleUrls: ['./admin-quiz-view.component.scss']
})
export class AdminQuizViewComponent implements OnInit {

  quiz$: Object;
  notification$: Object;
  user$: Object;
  group$: Object;

  constructor(private data: DataService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.data.getQuiz().subscribe(
      data => this.quiz$ = data
    );
    this.data.getUsers().subscribe(
      data => this.user$ = data
    );
    this.data.getGroups().subscribe(
      data => this.group$ = data
    );
    this.data.getNotifications().subscribe(
      data => this.notification$ = data
    );
  }

  deleteQuiz(quizId){
    this.http.delete('http://localhost:3000/quiz/' + quizId)
    .subscribe((data) => {console.log(data),
      this.router.navigateByUrl('/refreshComponent', {skipLocationChange: true}).then(()=>
      this.router.navigate(['adminQuizView']));  
    });
  }

  deleteUser(userId){
    this.http.delete('http://localhost:3000/user/' + userId)
    .subscribe((data) => {console.log(data),
      this.router.navigateByUrl('/refreshComponent', {skipLocationChange: true}).then(()=>
      this.router.navigate(['adminQuizView']));  
    });
  }

  deleteNotification(noteId){
    this.http.delete('http://localhost:3000/notifications/' + noteId)
    .subscribe((data) => {console.log(data),
      this.router.navigateByUrl('/refreshComponent', {skipLocationChange: true}).then(()=>
      this.router.navigate(['adminQuizView']));  
    });
  }

  deleteGroup(groupId){
    this.http.delete('http://localhost:3000/group/' + groupId)
    .subscribe((data) => {console.log(data),
      this.router.navigateByUrl('/refreshComponent', {skipLocationChange: true}).then(()=>
      this.router.navigate(['adminQuizView']));  
    });
  }

}
