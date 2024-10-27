import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss',
})
export class AsyncSubjectComponent implements OnInit {
  ngOnInit(): void {
    let asyncSubject$ = new AsyncSubject();

    asyncSubject$.subscribe((data) => console.log('Observer 1 : ', data));

    asyncSubject$.next(1);
    asyncSubject$.next(2);
    asyncSubject$.next(3);
    asyncSubject$.next(4);
    asyncSubject$.complete();

    setTimeout(() => {
      asyncSubject$.subscribe((data) => console.log('Observer 2 : ', data));
    }, 2000);
  }
}
