import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterOutlet,
  Router,
  RouterLink,
} from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  operatorsList: any = [
    { id: 1, label: 'operator_basics', path: '/operator_basics' },
    { id: 2, label: 'from', path: '/from' },
    { id: 3, label: 'new_observable', path: '/new_observable' },
    { id: 4, label: 'functionObs', path: '/function_observable' },
  ];

  pipeableList: any = [];

  transformationList: any = [{ id: 1, label: 'Buffer', path: '/buffer' }];

  miscellaneousList: any = [
    { id: 1, label: 'unsubscribe', path: '/unsubscribe' },
  ];
}
