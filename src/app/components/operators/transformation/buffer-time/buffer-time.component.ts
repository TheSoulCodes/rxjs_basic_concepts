import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferTime, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  standalone: true,
  imports: [],
  templateUrl: './buffer-time.component.html',
  styleUrl: './buffer-time.component.scss',
})
export class BufferTimeComponent implements OnInit, OnDestroy {
  intervalSubsctiption!: Subscription;
  ngOnInit(): void {
    this.intervalSubsctiption = interval(2000)
      .pipe(bufferTime(6000, 3000))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubsctiption?.unsubscribe();
  }
}
