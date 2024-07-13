import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observer4 } from '../../../../services/observer';

@Component({
  selector: 'app-new-observable',
  standalone: true,
  imports: [],
  templateUrl: './new-observable.component.html',
  styleUrl: './new-observable.component.scss',
})
export class NewObservableComponent implements OnInit {
  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for (let i = 0; i < 5; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    let observer = {
      next: (data: number) => console.log('observer 1', data),
      error: (error: string) => console.log(error),
      complete: () => console.log('Observer 1 Completed!'),
    };

    //Different ways of subscribing.
    newObservable.subscribe(observer);

    newObservable.subscribe({
      next: (data: number) => console.log('observer 2', data),
      error: (error: string) => console.log(error),
      complete: () => console.log('Observer 2 Completed!'),
    });

    newObservable.subscribe(
      (data) => console.log('Observer 3', data),
      (error) => console.log(error),
      () => console.log('Observer 3 Completed!')
    );

    newObservable.subscribe(new observer4());
  }
}
