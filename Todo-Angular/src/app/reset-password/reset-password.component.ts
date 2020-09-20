import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material'
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router) { }
password: string;
confirmPassword: string
  ngOnInit(): void {
  }
  reset()  {
    let password;
    if(this.confirmPassword === this.password){
      localStorage.setItem('password',this.password);
     this.router.navigate([LoginComponent]);
    }else {
      alert("Password is not same");
    }
  }
}
