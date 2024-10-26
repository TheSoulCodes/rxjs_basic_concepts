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
    { id: 5, label: 'ajax', path: '/ajax' },
  ];

  pipeableList: any = [];

  transformationList: any = [
    { id: 1, label: 'Buffer', path: '/buffer' },
    { id: 2, label: 'Buffer Count', path: '/buffercount' },
    { id: 3, label: 'Buffer Time', path: '/buffertime' },
    { id: 4, label: 'Buffer Toggle', path: '/buffertoggle' },
    { id: 5, label: 'Buffer When', path: '/bufferwhen' },
    { id: 6, label: 'Map', path: '/map' },
    { id: 7, label: 'Map To', path: '/mapto' },
    { id: 8, label: 'Merge Map', path: '/mergemap' },
    { id: 9, label: 'Merge Map To', path: '/mergemapto' },
    { id: 10, label: 'Concat Map', path: '/concatmap' },
    { id: 11, label: 'Concat Map To', path: '/concatmapto' },
    { id: 12, label: 'Exhaust Map', path: '/exhaustmap' },
    { id: 13, label: 'Switch Map', path: '/switchmap' },
    { id: 14, label: 'Switch Map To', path: '/switchmapto' },
  ];

  filteringList: any = [
    { id: 1, label: 'Take', path: '/take' },
    { id: 2, label: 'Take Last', path: '/takelast' },
    { id: 3, label: 'Take Until', path: '/takeuntil' },
    { id: 4, label: 'Take While', path: '/takewhile' },
    { id: 5, label: 'Skip', path: '/skip' },
    { id: 6, label: 'Skip Last', path: '/skiplast' },
    { id: 7, label: 'Skip Until', path: '/skipuntil' },
    { id: 8, label: 'Skip While', path: '/skipwhile' },
    { id: 9, label: 'Distinct', path: '/distinct' },
    { id: 10, label: 'Distinct Until Changed', path: '/distinctuntilchanged' },
    {
      id: 11,
      label: 'Distinct Key Until Changed',
      path: '/distinctkeyuntilchanged',
    },
    { id: 12, label: 'filter', path: '/filter' },
    { id: 13, label: 'audit', path: '/audit' },
    { id: 14, label: 'throttle', path: '/throttle' },
    { id: 15, label: 'first', path: '/first' },
    { id: 16, label: 'last', path: '/last' },
    { id: 17, label: 'debounce', path: '/debounce' },
    { id: 18, label: 'Element At', path: '/elementat' },
    { id: 19, label: 'Ignore Elements', path: '/ignoreelements' },
    { id: 20, label: 'Single', path: '/single' },
  ];

  miscellaneousList: any = [
    { id: 1, label: 'Unsubscribe', path: '/unsubscribe' },
    { id: 2, label: 'Multicast', path: '/multicast' },
  ];

  subjectsList: any = [
    { id: 1, label: 'Subject', path: '/subject' },
    { id: 2, label: 'Cold Observables', path: '/coldobservables' },
  ];
}
