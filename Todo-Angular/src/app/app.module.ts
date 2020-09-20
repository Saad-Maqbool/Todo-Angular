import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    FormsModule,
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  RouterModule.forRoot([
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    {path: 'reset', component: ResetPasswordComponent},
    {path: 'todo', component: TodoListComponent},
  ]),
  ],
  exports: [
    CommonModule,
    FormsModule,
     MatToolbarModule, 
     MatButtonModule, 
     MatCardModule, 
     MatInputModule, 
     MatDialogModule, 
     MatTableModule, 
     MatMenuModule,
     MatIconModule,
     MatProgressSpinnerModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
