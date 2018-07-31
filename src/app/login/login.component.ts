import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "pob190";
  password = "abc";

  myForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
          Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    })
  }

  /*   onSubmit() {
      let obs = this.http.get('http://localhost:3000/user', this.myForm.value).subscribe((data)=>{console.log(data)})
    } */
  /*
    postNewUser() {
      let obs = this.http.post('http://localhost:8081/Project2_REST_Test/api/user/login', this.myForm.value).subscribe(
          (data)=>
          {
            console.log(data)
              //this.router.navigate(['/takeQ'])
          });
  }
  */
  //http://localhost:8081/Project2_REST_Test/api/user/login
  tryLogin() {
    let obs = this.http.post('http://localhost:8081/Project2_REST_Test/api/user/login', this.myForm.value).subscribe(
      (data)=>
      {
        if(data === null){
          console.log("Invalid Login")
        }else{
          console.log(data)
          this.router.navigateByUrl('/userAcc');
        }



          //this.router.navigate(['/takeQ'])
      });
  }
  
  register() {
    this.router.navigateByUrl('/userAcc');
  }
}