import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  buffer,
  fromEvent,
  interval,
  Observable,
  Subscription,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-buffer',
  standalone: true,
  imports: [],
  templateUrl: './buffer.component.html',
  styleUrl: './buffer.component.scss',
})
export class BufferComponent implements OnInit, AfterViewInit, OnDestroy {
  intervalSubscription!: Subscription;
  intervalData: number[] = [];
  showData$!: Observable<Event>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.showData$ = fromEvent(
      document.getElementById('displayButton')!,
      'click'
    );
  }

  startInterval() {
    this.intervalSubscription = interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        buffer(this.showData$)
      )
      .subscribe((data: number[]) => {
        this.intervalData.push(...data);
      });
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
