import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoService } from './services/todo.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
