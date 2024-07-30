import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, skipLast, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  standalone: true,
  imports: [],
  templateUrl: './skip-last.component.html',
  styleUrl: './skip-last.component.scss',
})
export class SkipLastComponent implements OnInit, OnDestroy {
  intervalSubsctiption!: Subscription;
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(skipLast(2))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubsctiption?.unsubscribe();
  }
}
