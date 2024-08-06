import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, skipUntil, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  standalone: true,
  imports: [],
  templateUrl: './skip-until.component.html',
  styleUrl: './skip-until.component.scss',
})
export class SkipUntilComponent implements AfterViewInit, OnDestroy {
  intervalSubscription!: Subscription;
  buttonEvent!: Observable<Event>;

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById('showuntil')!,
      'click'
    );

    this.intervalSubscription = interval(2000)
      .pipe(skipUntil(this.buttonEvent))
      .subscribe((data) => console.log(data));
  }
  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
