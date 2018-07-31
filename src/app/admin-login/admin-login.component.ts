import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

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

  tryAdminLogin() {
    let obs = this.http.post('http://localhost:8081/Project2_REST_Test/api/admin/login', this.myForm.value).subscribe(
      (data)=>
      {
        if(data === null){
          console.log("Invalid Login")
        } else {
          console.log(data)
          this.router.navigateByUrl('/adminQuizView')
        }
      }
    )
  }

  fakeAdminLogin(){
    this.router.navigate(['/adminQuizView']);
  }
  
  register() {
    this.router.navigateByUrl('/userAcc');
  }
}
