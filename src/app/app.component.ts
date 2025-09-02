import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./pages/todo/todo.component";
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodoComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-17';
  tododata1 = TODO_DATA[0];
  tododata2 = TODO_DATA[1];
  tododata3 = TODO_DATA[2];
  tododata4 = TODO_DATA[3];
  tododata5 = TODO_DATA[4];

  getTodoInfo(event: NTodo.TodoData) {
    console.log("Evento recibido en el padre", event);
  }
}
