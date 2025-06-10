import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoApiService } from '../../services/todo-api.service';
import * as TodoActions from '../actions/todo.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private api: TodoApiService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.api.getTodos().pipe(
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(error => of(TodoActions.loadTodosFailure({ error: error.message })))
        )
      )
    )
  );
}
