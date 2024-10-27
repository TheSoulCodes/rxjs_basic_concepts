import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  connectable,
  interval,
  ReplaySubject,
  share,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-publish-replay',
  standalone: true,
  imports: [],
  templateUrl: './publish-replay.component.html',
  styleUrl: './publish-replay.component.scss',
})
export class PublishReplayComponent implements OnInit, OnDestroy {
  intervalSubscription1?: Subscription;
  intervalSubscription2?: Subscription;

  ngOnInit(): void {
    // let source$ = connectable(interval(2000), {
    //   connector: () => new ReplaySubject<number>(2, 3000),
    // });

    // this.intervalSubscription1 = source$.subscribe((data) =>
    //   console.log('Observer 1 : ', data)
    // );

    // setTimeout(() => {
    //   this.intervalSubscription2 = source$.subscribe((data) =>
    //     console.log('Observer 2 : ', data)
    //   );
    // }, 4000);

    // source$.connect();

    let source$ = interval(2000).pipe(
      share({ connector: () => new ReplaySubject(2, 3000) })
    );

    this.intervalSubscription1 = source$.subscribe((data) =>
      console.log('Observer 1 : ', data)
    );

    setTimeout(() => {
      this.intervalSubscription2 = source$.subscribe((data) =>
        console.log('Observer 2 : ', data)
      );
    }, 4000);
  }

  ngOnDestroy(): void {
    this.intervalSubscription1?.unsubscribe();
    this.intervalSubscription2?.unsubscribe();
  }
}
