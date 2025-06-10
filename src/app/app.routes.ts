import { Routes } from '@angular/router';
import { TodoListComponent } from './features/todos/containers/todo-list.component';
import { TodoDetailsComponent } from './features/todos/containers/todo-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    children: [
      { path: '', component: TodoListComponent },
      { path: ':id', component: TodoDetailsComponent } // 👈 Details route
    ]
  }
];
