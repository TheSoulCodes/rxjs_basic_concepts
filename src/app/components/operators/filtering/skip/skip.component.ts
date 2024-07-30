import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, skip, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-skip',
  standalone: true,
  imports: [],
  templateUrl: './skip.component.html',
  styleUrl: './skip.component.scss',
})
export class SkipComponent implements OnDestroy, OnInit {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    this.intervalSubscription = interval(2000)
      .pipe(take(10), skip(11))
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('completed'),
      });
  }
  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
