import { Component } from '@angular/core';
import { funcObservable, functionObs } from '../../../../services/functionObs';

@Component({
  selector: 'app-function-observable',
  standalone: true,
  imports: [],
  templateUrl: './function-observable.component.html',
  styleUrl: './function-observable.component.scss',
})
export class FunctionObservableComponent {
  constructor() {
    console.log('Before Function');
    console.log(functionObs());
    console.log(functionObs());
    console.log('After Function');

    console.log('Before Observable');
    funcObservable.subscribe((data) => {
      console.log(data);
    });
    funcObservable.subscribe((data) => {
      console.log(data);
    });
    console.log('After Observable');
  }
}
