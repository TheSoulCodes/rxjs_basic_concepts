import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-void-subject',
  standalone: true,
  imports: [],
  templateUrl: './void-subject.component.html',
  styleUrl: './void-subject.component.scss',
})
export class VoidSubjectComponent implements OnInit {
  ngOnInit(): void {
    let subject$ = new Subject<void>();

    subject$.subscribe((data) => console.log(data));

    subject$.next();
  }
}
