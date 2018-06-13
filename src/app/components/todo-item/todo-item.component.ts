import { Component, OnInit , Input} from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
    this.toastr.success('Todo-Item Removed');

  
  }

}
