import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getQuiz() {
	  return this.http.get('http://localhost:3000/quiz');
  }

  getNotifications() {
    return this.http.get('http://localhost:3000/notifications');
  }
	
  getQuizView(id) {
	  return this.http.get('http://localhost:3000/quiz/' + id);
	  
  }
	
  getQuizById(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

}