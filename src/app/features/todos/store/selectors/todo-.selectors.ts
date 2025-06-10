import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(selectTodoState, state => state.todos);

export const selectSelectedTodoId = createSelector(
  selectTodoState,
  (state) => state.selectedTodoId
);

export const selectSelectedTodo = createSelector(
  selectTodoState,
  selectSelectedTodoId,
  (state, selectedId) => state.todos.find(todo => todo.id === selectedId)
);
