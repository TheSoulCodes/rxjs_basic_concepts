import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.scss',
})
export class BehaviorSubjectComponent implements OnInit {
  ngOnInit(): void {
    let behaviorSubject$ = new BehaviorSubject(0);

    behaviorSubject$.subscribe((data) => console.log('Observer 1: ', data));

    behaviorSubject$.next(1);

    behaviorSubject$.subscribe((data) => console.log('Observer 2: ', data));

    behaviorSubject$.next(2);
  }
}
