import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
   private todoText: String


  constructor() { 
    this.todoText = ' ';

  }

  ngOnInit() {
  }

private addTodo(): void{
  console.log("TODO:", this.todoText);
  this.todoText='';
}

}
