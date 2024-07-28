import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  standalone: true,
  imports: [],
  templateUrl: './take-until.component.html',
  styleUrl: './take-until.component.scss',
})
export class TakeUntilComponent implements AfterViewInit, OnDestroy {
  intervalSubscription!: Subscription;
  buttonEvent!: Observable<Event>;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById('stop_interval')!,
      'click'
    );
    this.intervalSubscription = interval(2000)
      .pipe(takeUntil(this.buttonEvent))
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
