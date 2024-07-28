import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  standalone: true,
  imports: [],
  templateUrl: './take-while.component.html',
  styleUrl: './take-while.component.scss',
})
export class TakeWhileComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    this.intervalSubscription = interval(1000)
      .pipe(takeWhile((x) => x < 10, true))
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Completed'),
      });
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
