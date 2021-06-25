import { Component, OnInit } from '@angular/core';
import {ToDoItem} from '../../models/to-do-item';
import {ITEMS} from "../../mock-todo-items";
import { TodoItemsService } from '../../services/todo-items.service';
import {delay} from "rxjs/operators";
import {error} from "util";

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.styl']
})
export class ToDoItemsComponent implements OnInit {

  // items = ITEMS;
  items: ToDoItem[] = []
  selectedItem: ToDoItem

  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  }

  // Dependency Injection using Inversion of Control
  // (The instance of TodoItemsService to the instance of ToDoItemsComponent)
  constructor(private todoItemsService: TodoItemsService) {
    // this.items = todoItemsService.getMockItems();
    /* todoItemsService.getMockItemsStream().subscribe(item => {
      this.items.unshift(item)
    }) */
    todoItemsService.getRemoteItems().subscribe(
      items =>
        items.forEach(item => this.items.unshift(new ToDoItem(item.id, item.title, item.completed))),
      error => console.log(error)
    )
  }

  ngOnInit() {
  }

}
