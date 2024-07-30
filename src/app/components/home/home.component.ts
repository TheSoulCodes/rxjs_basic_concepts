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

  transformationList: any = [
    { id: 1, label: 'Buffer', path: '/buffer' },
    { id: 2, label: 'Buffer Count', path: '/buffercount' },
    { id: 3, label: 'Buffer Time', path: '/buffertime' },
    { id: 4, label: 'Buffer Toggle', path: '/buffertoggle' },
    { id: 5, label: 'Buffer When', path: '/bufferwhen' },
  ];

  filteringList: any = [
    { id: 1, label: 'Take', path: '/take' },
    { id: 2, label: 'Take Last', path: '/takelast' },
    { id: 3, label: 'Take Until', path: '/takeuntil' },
    { id: 4, label: 'Take While', path: '/takewhile' },
    { id: 5, label: 'Skip', path: '/skip' },
    { id: 6, label: 'Skip Last', path: '/skiplast' },
  ];

  miscellaneousList: any = [
    { id: 1, label: 'unsubscribe', path: '/unsubscribe' },
  ];
}
