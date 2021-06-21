import { Component, OnInit } from '@angular/core';
import {ToDoItem} from '../../models/to-do-item';
import {ITEMS} from "../../mock-todo-items";

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.styl']
})
export class ToDoItemsComponent implements OnInit {

  items = ITEMS;
  /* toDoItem: ToDoItem = {
    id: 1,
    name: "Call Joe",
    isComplete: false
  }; */

  constructor() { }

  ngOnInit() {
  }

}
