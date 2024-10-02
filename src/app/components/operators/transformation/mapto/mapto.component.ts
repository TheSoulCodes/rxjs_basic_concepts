import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, mapTo, Subscription } from 'rxjs';

@Component({
  selector: 'app-mapto',
  standalone: true,
  imports: [],
  templateUrl: './mapto.component.html',
  styleUrl: './mapto.component.scss',
})
export class MaptoComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  ngOnInit(): void {
    // this.intervalSubscription = interval(2000)
    //   .pipe(mapTo('constant value'))
    //   .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
