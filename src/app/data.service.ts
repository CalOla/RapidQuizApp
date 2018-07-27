import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getQuiz() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getQuizById(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
}