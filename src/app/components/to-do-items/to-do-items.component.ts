import { Component, OnInit } from '@angular/core';
import {ToDoItem} from '../../models/to-do-item';
import {ITEMS} from "../../mock-todo-items";
import { TodoItemsService } from '../../services/todo-items.service';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.styl']
})
export class ToDoItemsComponent implements OnInit {

  // items = ITEMS;
  items
  selectedItem: ToDoItem

  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  }

  // Dependency Injection using Inversion of Control
  // (The instance of TodoItemsService to the instance of ToDoItemsComponent)
  constructor(private todoItemsService: TodoItemsService) {
    this.items = todoItemsService.getMockItems();
  }

  ngOnInit() {
  }

}
