import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  constructor() { }

  ngOnInit(): void {
  }
  register() {
    if( this.username && this.email && this.password) 
    {
      localStorage.setItem('username',this.username)
      localStorage.setItem('email',this.email)
      localStorage.setItem('password',this.password)
    }
  }
}
