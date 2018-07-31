import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

    myForm: FormGroup;

    //Form State
    loading = false;
    success = false;
    
    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

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
                Validators.max(125)
            ]],
        })

        this.myForm.valueChanges.subscribe(console.log)
    }
    
    get userName() {
        return this.myForm.get('username');
    }
    
    get password() {
        return this.myForm.get('password');
    }

    get firstName() {
        return this.myForm.get('firstname');
    }

    get lastName() {
        return this.myForm.get('lastname');
    }

    get age() {
        return this.myForm.get('age');
    }

    postNewUser() {
        let obs = this.http.post('http://localhost:3000/user', this.myForm.value).subscribe(
            (data)=>{console.log(data),
                this.router.navigate(['/takeQ'])
            })
    }

    async submitHandler() {
        this.loading = true;
        this.postNewUser;
        this.success = true;
    }
}
