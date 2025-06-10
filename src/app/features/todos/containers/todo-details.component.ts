import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { selectTodo } from '../store/actions/todo.actions';
import { selectSelectedTodo } from '../store/selectors/todo-.selectors';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="todo$ | async as todo">
      <h2>Todo Details</h2>
      <p><strong>ID:</strong> {{ todo.id }}</p>
      <p><strong>Title:</strong> {{ todo.title }}</p>
      <p><strong>Status:</strong> {{ todo.completed ? '✅ Completed' : '⏳ Pending' }}</p>
    </div>
  `
})
export class TodoDetailsComponent implements OnInit {
  todo$: Observable<Todo | undefined> | undefined;
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(selectTodo({ todoId: id }));
    this.todo$ = this.store.select(selectSelectedTodo);
  }
}
