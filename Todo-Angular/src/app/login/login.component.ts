import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material'
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit(): void {
  }
  login() {
    let username;
    let password;
    username = localStorage.getItem('username');
    password = localStorage.getItem('password');
    if(this.username === username && this.password === password){
     this.router.navigate([TodoListComponent]);
    }else {
      alert("Invalid credentials");
    }
  }
  }

