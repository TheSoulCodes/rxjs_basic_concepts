import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last',
  standalone: true,
  imports: [],
  templateUrl: './take-last.component.html',
  styleUrl: './take-last.component.scss',
})
export class TakeLastComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    this.intervalSubscription = interval(1000)
      .pipe(take(10), takeLast(2))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
