import { Component, AfterViewInit, Inject } from '@angular/core';
import { rejects } from 'assert';
import { error } from 'console';
import { title } from 'process';
import { from, fromEvent } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss',
})
export class FromComponent implements AfterViewInit {
  fromArray = [
    { title: 'first', description: 'firstDesc' },
    { title: 'second', description: 'secondDesc' },
    { title: 'third', description: 'thirdDesc' },
    { title: 'fourth', description: 'foruthDesc' },
  ];

  fromObservable$ = from(this.fromArray);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('sending data');
    }, 3000);
  });

  promiseObservable$ = from(this.promise);

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.fromObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });

    this.promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('Promise completed'),
    });
  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('fromEvent')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('From Event completed'),
    });
  }
}
