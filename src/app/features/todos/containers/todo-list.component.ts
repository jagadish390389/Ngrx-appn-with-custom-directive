import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Todo } from "../models/todo.model";
import { loadTodos, selectTodo } from "../store/actions/todo.actions";
import { selectAllTodos } from "../store/selectors/todo-.selectors";
import { TodoDetailsComponent } from "./todo-details.component"; // 👈 import details component
import { RouterModule } from "@angular/router";
import { HighlightDirective } from "src/app/shared/directives/highlight.directive";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoDetailsComponent, HighlightDirective], // 👈 add it here
  template: `
    <h2>Todo List</h2>
    <ul>
      <li *ngFor="let todo of todos$ | async" [routerLink]="[todo.id]" [appHighlight]="'#e0f7fa'">
        <input type="checkbox" [checked]="todo.completed"  />
        {{ todo.title }}
      </li>
    </ul>

    <hr />

    <app-todo-details></app-todo-details> <!-- 👈 Add here -->
  `
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos);
  }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

//   selectTodo(todoId: number) {
//     this.store.dispatch(selectTodo({ todoId }));
//   }
}
