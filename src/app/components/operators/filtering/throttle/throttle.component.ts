import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle',
  standalone: true,
  imports: [],
  templateUrl: './throttle.component.html',
  styleUrl: './throttle.component.scss',
})
export class ThrottleComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = interval(1000)
      .pipe(
        throttle((value) => interval(2000), { leading: true, trailing: true })
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
