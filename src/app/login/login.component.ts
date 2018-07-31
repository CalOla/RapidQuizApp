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

  username = "stevanTest28";
  password = "stevantest28";

  myForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
	  this.myForm = this.fb.group({
      username: ['', [
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

  tryLogin() {
      console.log(this.username,
      this.password);
  }
  
  register() {
    this.router.navigateByUrl('/userAcc');
  }
}
