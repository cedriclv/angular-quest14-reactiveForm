import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../entities/User';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validators';
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
      email: ['',[Validators.required, passwordValidator]],
      password: ['',[Validators.required, passwordValidator]],  
    })
  })

  constructor(private fb : FormBuilder){}

  Register(){
    console.log(this.userForm.value);
    this.user = new User(
    this.userForm.value.username,      
    this.userForm.value.credentials?.email,      
    this.userForm.value.credentials?.password,      
    this.userForm.value.city
    )      
    
  }
}
