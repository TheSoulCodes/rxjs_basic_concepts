import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  connectable,
  ConnectableObservable,
  interval,
  multicast,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-multicast',
  standalone: true,
  imports: [],
  templateUrl: './multicast.component.html',
  styleUrl: './multicast.component.scss',
})
export class MulticastComponent implements OnInit, OnDestroy {
  intervalSubscription1?: Subscription;
  intervalSubscription2?: Subscription;
  connectionSubscription?: Subscription;
  ngOnInit(): void {
    // let source = interval(2000).pipe(
    //   multicast(new Subject())
    // ) as ConnectableObservable<number>;

    // source.subscribe((data) => console.log(data));

    // setTimeout(() => {
    //   source.subscribe((data) => console.log(data));
    // }, 3000);

    // source.connect();

    let source = connectable(interval(2000));

    this.intervalSubscription1 = source.subscribe((data) => console.log(data));
    setTimeout(() => {
      this.intervalSubscription2 = source.subscribe((data) =>
        console.log(data)
      );
    }, 3000);

    this.connectionSubscription = source.connect();
  }

  ngOnDestroy(): void {
    this.intervalSubscription1?.unsubscribe();
    this.intervalSubscription2?.unsubscribe();
    this.connectionSubscription?.unsubscribe();
  }
}
