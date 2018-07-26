import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
    
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
}
