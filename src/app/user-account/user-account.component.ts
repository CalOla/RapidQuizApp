import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  myForm: FormGroup;
    
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.myForm = this.fb.group({
          username: ['', [
              Validators.required
          ]],
          password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
          firstname: ['', [
              Validators.required
          ]],
          lastname: ['', [
              Validators.required
          ]],
           age: [null, [
        Validators.required,
        Validators.minLength(2), 
        Validators.min(18), 
        Validators.max(65)
      ]],
      })
  }
    
    get userName() {
        return this.myForm.get('username');
    }
    
    get password() {
        return this.myForm.get('password');
    }

    get age() {
        return this.myForm.get('age');
    }
    

}
