import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
    
  myForm: FormGroup;

  //Form States
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      groupName: '',
      description: '',
      members: this.fb.array([]),
    })

    this.myForm.valueChanges.subscribe(console.log)
  }
    
  get groupForms(){
      return this.myForm.get('members') as FormArray
  }
    
 addMembers(){
     const member = this.fb.group({
        username: [] 
     });
     
     this.groupForms.push(member);
 }
    
 deleteMember(i) {
    this.groupForms.removeAt(i)
  }

  postNewGroup() {
	  let obs = this.http.post('http://localhost:3000/group', this.myForm.value).subscribe(
      (data)=>{console.log(data),
        this.router.navigate(['/takeQ'])
      })
  }
	
  async submitHandler() {
	  this.loading = true;
	  this.postNewGroup;
	  this.success = true;
  }
}
