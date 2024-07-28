import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferToggle, interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  standalone: true,
  imports: [],
  templateUrl: './buffer-toggle.component.html',
  styleUrl: './buffer-toggle.component.scss',
})
export class BufferToggleComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    let opened = interval(6000).pipe(tap(() => console.log('Opened')));
    let closed = () => interval(3000).pipe(tap(() => console.log('Closed')));

    this.intervalSubscription = interval(1000)
      .pipe(bufferToggle(opened, closed))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
