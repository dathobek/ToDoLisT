import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

   private todos: Todo [];
   private nextid: number;

  constructor() { 
    this.todos = [
     new Todo(0,"Make Dinner tonight!"),
     new Todo(1,"Watch Some cool Nigerian Movies!"),
     new Todo(2,"Play online Chess")

    ];
    this.nextid=3;

  }

}
