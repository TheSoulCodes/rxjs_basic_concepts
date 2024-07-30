import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'operator_basics',
    loadComponent: () =>
      import(
        './components/operators/operator-basics/operator-basics.component'
      ).then((m) => m.OperatorBasicsComponent),
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
  {
    path: 'buffer',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer/buffer.component'
      ).then((m) => m.BufferComponent),
  },
  {
    path: 'buffercount',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-count/buffer-count.component'
      ).then((m) => m.BufferCountComponent),
  },
  {
    path: 'buffertime',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-time/buffer-time.component'
      ).then((m) => m.BufferTimeComponent),
  },
  {
    path: 'buffertoggle',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-toggle/buffer-toggle.component'
      ).then((m) => m.BufferToggleComponent),
  },
  {
    path: 'bufferwhen',
    loadComponent: () =>
      import(
        './components/operators/transformation/buffer-when/buffer-when.component'
      ).then((m) => m.BufferWhenComponent),
  },
  {
    path: 'take',
    loadComponent: () =>
      import('./components/operators/filtering/take/take.component').then(
        (m) => m.TakeComponent
      ),
  },
  {
    path: 'takelast',
    loadComponent: () =>
      import(
        './components/operators/filtering/take-last/take-last.component'
      ).then((m) => m.TakeLastComponent),
  },
  {
    path: 'takeuntil',
    loadComponent: () =>
      import(
        './components/operators/filtering/take-until/take-until.component'
      ).then((m) => m.TakeUntilComponent),
  },
  {
    path: 'takewhile',
    loadComponent: () =>
      import(
        './components/operators/filtering/take-while/take-while.component'
      ).then((m) => m.TakeWhileComponent),
  },
  {
    path: 'skip',
    loadComponent: () =>
      import('./components/operators/filtering/skip/skip.component').then(
        (m) => m.SkipComponent
      ),
  },
  {
    path: 'skiplast',
    loadComponent: () =>
      import(
        './components/operators/filtering/skip-last/skip-last.component'
      ).then((m) => m.SkipLastComponent),
  },
];
