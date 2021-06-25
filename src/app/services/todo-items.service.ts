import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observable, of, pipe} from 'rxjs';
import {ToDoItem} from '../models/to-do-item';
// import { ITEMS } from '../mock-todo-items';
import {concatMap, delay, mergeMap} from "rxjs/operators";
import {ToDoItemFake} from "../models/to-do-item-fake";

const BASE_URL = 'http://jsonplaceholder.typicode.com/todos';

@Injectable({
  // по умолчанию создается один экземпляр этой службы,
  // и по требованию внедряется в любой класс;
  // можно вместо root указать имя модуля,
  // вне которого внедрение будет недоступно
  providedIn: 'root'
})
export class TodoItemsService {

  items: ToDoItemFake[] = []
  /* private itemsObservable = new Observable<ToDoItem>(subscriber => {
    ITEMS.forEach((item => {
      subscriber.next(item)
    }))
    subscriber.complete()
  }) */

  constructor(private http: HttpClient) {}

  /* getMockItems(): ToDoItem[] {
    return ITEMS;
  } */

  /* getMockItemsStream(): Observable<ToDoItem> {
    return this.itemsObservable.pipe(
      concatMap(x => of(x).pipe(delay(2000)))
    );
  } */

  getRemoteItems(): Observable<ToDoItemFake[]> {
    return this.http.get<ToDoItemFake[]>(BASE_URL)
  }
}
