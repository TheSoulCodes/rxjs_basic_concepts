import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss',
})
export class ReplaySubjectComponent implements OnInit {
  ngOnInit(): void {
    let replaySubject$ = new ReplaySubject(2, 1000);

    replaySubject$.next(0);

    replaySubject$.subscribe((data) => console.log('Observer 1 :', data));

    replaySubject$.next(1);
    replaySubject$.next(2);
    replaySubject$.next(3);
    replaySubject$.next(4);
    // replaySubject$.error('Erro Occured');

    setTimeout(() => {
      replaySubject$.subscribe((data) => console.log('Observer 2 :', data));
      replaySubject$.next(5);
    }, 3000);
  }
}
