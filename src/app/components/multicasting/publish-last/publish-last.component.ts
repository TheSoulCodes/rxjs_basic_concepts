import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, connectable, interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-publish-last',
  standalone: true,
  imports: [],
  templateUrl: './publish-last.component.html',
  styleUrl: './publish-last.component.scss',
})
export class PublishLastComponent implements OnInit, OnDestroy {
  intervalSubscription1?: Subscription;
  intervalSubscription2?: Subscription;
  ngOnInit(): void {
    let source$ = connectable(interval(2000).pipe(take(5)), {
      connector: () => new AsyncSubject(),
    });

    this.intervalSubscription1 = source$.subscribe((data) =>
      console.log('Observer 1 : ', data)
    );

    setTimeout(() => {
      this.intervalSubscription2 = source$.subscribe((data) =>
        console.log('Observer 2 : ', data)
      );
    }, 4000);

    source$.connect();
  }

  ngOnDestroy(): void {
    this.intervalSubscription1?.unsubscribe();
    this.intervalSubscription2?.unsubscribe();
  }
}
