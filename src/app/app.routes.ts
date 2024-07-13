import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'from',
    loadComponent: () =>
      import('./components/operators/creation/from/from.component').then(
        (m) => m.FromComponent
      ),
  },
  {
    path: 'new_observable',
    loadComponent: () =>
      import(
        './components/operators/creation/new-observable/new-observable.component'
      ).then((m) => m.NewObservableComponent),
  },
  {
    path: 'function_observable',
    loadComponent: () =>
      import(
        './components/operators/creation/function-observable/function-observable.component'
      ).then((m) => m.FunctionObservableComponent),
  },
  {
    path: 'unsubscribe',
    loadComponent: () =>
      import(
        './components/miscellaneous/unsubscribe/unsubscribe.component'
      ).then((m) => m.UnsubscribeComponent),
  },
];
