import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

   private todos: Todo [];
   private nextId: number;

  constructor() {
    this.todos =[
      new Todo(0, "Make Dinner Tonight"),
      new Todo(1, "Watch some 9ja Movies "),
      new Todo(2, "Play Some Chess Games")
    ];
      this.nextId = 3;
   }
 
   public addTodo(text: string) : void {
     let todo = new Todo(this.nextId, text);
     this.todos.push(todo);
     this.nextId++;
   }

   public getTodos(): Todo[]{
     return this.todos;
   }

   public removeTodo(id: number): void{
     this.todos = this.todos.filter((todo) => todo.id != id);
   }
}
