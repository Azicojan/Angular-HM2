import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: string[] = ['Task 1', 'Task 2', 'Task 3'];

  removeItem(item: string) {
    this.todoItems = this.todoItems.filter(todo => todo !== item);
  }
}
