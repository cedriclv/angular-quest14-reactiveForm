import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../entities/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  user? : User;
  
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  city = new FormControl('Orleans');

  Register(){
    this.user = new User(
    this.username.value,      
    this.email.value,   
    this.password.value,      
    this.city.value
    )      
  }
}
