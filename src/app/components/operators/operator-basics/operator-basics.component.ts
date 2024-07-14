import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-operator-basics',
  standalone: true,
  imports: [],
  templateUrl: './operator-basics.component.html',
  styleUrl: './operator-basics.component.scss',
})
export class OperatorBasicsComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  intervalData: any[] = [];
  ngOnInit(): void {
    const newObs = interval(2000);
    this.intervalSubscription = newObs
      .pipe(
        filter((number) => {
          return number % 2 === 0;
        }),
        map((data) => {
          return 'even number:' + data;
        })
      )
      .subscribe((data) => {
        this.intervalData.push(data);
      });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
