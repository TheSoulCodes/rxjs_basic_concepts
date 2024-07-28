import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-take',
  standalone: true,
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss',
})
export class TakeComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    this.intervalSubscription = interval(2000)
      .pipe(take(5))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
