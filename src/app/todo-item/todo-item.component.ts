import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item!: string;
  isChecked = false;
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  toggleItem() {
    this.isChecked = !this.isChecked;
  }

  removeItem() {
    if (this.isChecked) {
      this.remove.emit(this.item);
    }
  }
}
