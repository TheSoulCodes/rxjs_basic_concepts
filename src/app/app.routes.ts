import { Routes } from '@angular/router';
import { FromComponent } from './components/operators/creation/from/from.component';

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
];
