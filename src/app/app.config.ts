// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';

// Import your reducer and effects
import { todosReducer } from './features/todos/store/reducers/todo.reducer';
import { TodoEffects } from './features/todos/store/effects/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ todos: todosReducer }),
    provideEffects([TodoEffects]),
    provideStoreDevtools() // optional, for Redux DevTools
  ]
};
