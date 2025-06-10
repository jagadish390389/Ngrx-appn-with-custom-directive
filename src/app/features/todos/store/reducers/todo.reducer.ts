import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import * as TodoActions from '../actions/todo.actions';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  selectedTodoId: number | null;
}

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  selectedTodoId: null,
};

export const todosReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(TodoActions.selectTodo, (state, { todoId }) => ({
    ...state,
    selectedTodoId: todoId,
  }))
);
