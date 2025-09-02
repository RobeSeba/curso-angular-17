import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NTodo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  @Input({required: true}) todoData!:NTodo.TodoData ;
  @Output() onClickIcon = new EventEmitter<NTodo.TodoData>();
}
