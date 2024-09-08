import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { debounce, fromEvent, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce',
  standalone: true,
  imports: [],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.scss',
})
export class DebounceComponent implements OnInit, AfterViewInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    this.intervalSubscription = interval(1000)
      .pipe(debounce((val) => interval(val * 100)))
      .subscribe((data) => console.log(data));
  }

  ngAfterViewInit(): void {
    let buttonEvent = fromEvent(
      document.getElementById('button_debounce')!,
      'click'
    );

    buttonEvent
      .pipe(debounce((value) => interval(1000)))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
