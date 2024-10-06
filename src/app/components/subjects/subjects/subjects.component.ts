import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent implements OnInit {
  ngOnInit(): void {
    this.observables();
    this.subjectAsObservable();
  }

  observables() {
    let observalbe$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer1 = {
      next: (data: number) => {
        console.log('Observer 1 ', data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('Observer 1 Completed'),
    };

    let observer2 = {
      next: (data: number) => {
        console.log('Observer 2 ', data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('Observer 2 Completed'),
    };

    observalbe$.subscribe(observer1);
    observalbe$.subscribe(observer2);
  }

  subjectAsObservable() {
    let observable$ = of(1, 2, 3, 4, 5);
    let subject = new Subject<number>();

    let observer1 = {
      next: (data: number) => {
        console.log('Observer 1 ', data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('Observer 1 Completed'),
    };

    let observer2 = {
      next: (data: number) => {
        console.log('Observer 2 ', data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => console.log('Observer 2 Completed'),
    };

    subject.subscribe(observer1);
    subject.subscribe(observer2);

    observable$.subscribe(subject);
  }
}
