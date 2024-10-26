import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  standalone: true,
  imports: [],
  templateUrl: './cold-observables.component.html',
  styleUrl: './cold-observables.component.scss',
})
export class ColdObservablesComponent implements OnInit {
  intervalSubscription$?: Subscription;

  ngOnInit(): void {
    let number = Math.random();

    let observable$ = new Observable((observer) => {
      observer.next(number);
    });

    observable$.subscribe((value) => {
      console.log('Observer 1: ', value);
    });

    observable$.subscribe((value) => {
      console.log('Observer 2: ', value);
    });

    let documentEvent$ = fromEvent(document, 'click');

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });
  }
}
