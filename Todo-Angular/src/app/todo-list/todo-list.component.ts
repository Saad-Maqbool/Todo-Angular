import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit { 
  constructor() { }
  public items = []; 
  public newTask; 
  ngOnInit(): void {
  }
  public addToList() { 
    if (this.newTask == '') { 
    } 
    else { 
        this.items.push(this.newTask); 
        this.newTask = ''; 
    } 
} 
  public deleteTask(index) { 
    this.items.splice(index, 1); 
} 
}
