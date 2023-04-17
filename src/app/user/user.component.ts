import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../entities/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  user? : User;

  userForm = this.fb.group({
    username: [''],
    city: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],  
    })
  })

  constructor(private fb : FormBuilder){}

  Register(){
    console.log(this.userForm.value);
    this.user = new User(
    this.userForm.value.username,      
    this.userForm.value.credentials?.email,      
    this.userForm.value.credentials?.password,      
    this.userForm.value.city,      
    )      
    
  }
}
