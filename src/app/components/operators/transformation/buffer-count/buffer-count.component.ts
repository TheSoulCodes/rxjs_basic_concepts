import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferCount, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  standalone: true,
  imports: [],
  templateUrl: './buffer-count.component.html',
  styleUrl: './buffer-count.component.scss',
})
export class BufferCountComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = interval(1000)
      .pipe(bufferCount(5, 4))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
