import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

   private todoText: string;


  constructor( private todoService: TodoService,private toastr: ToastrService) { 
    this.todoText = ' ';

  }

  ngOnInit() {
  }

private addTodo(): void{
  this.todoService.addTodo(this.todoText);
  this.toastr.success('Added another TodoItem!!')
  this.todoText='';
}

}
