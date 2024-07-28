import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferWhen, interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  standalone: true,
  imports: [],
  templateUrl: './buffer-when.component.html',
  styleUrl: './buffer-when.component.scss',
})
export class BufferWhenComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    let x = 0;
    this.intervalSubscription = interval(1000)
      .pipe(
        tap((i) => (x = i)),
        bufferWhen(() => {
          if ((x = 10)) {
            return interval(3000);
          }
          return interval(5000);
        })
      )
      .subscribe((data) => console.log(data));
  }
  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
