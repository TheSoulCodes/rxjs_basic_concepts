import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, connectable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-publish-behavior',
  standalone: true,
  imports: [],
  templateUrl: './publish-behavior.component.html',
  styleUrl: './publish-behavior.component.scss',
})
export class PublishBehaviorComponent implements OnInit, OnDestroy {
  intervalSubscription1?: Subscription;
  intervalSubscription2?: Subscription;

  ngOnInit(): void {
    let source$ = connectable(interval(2000), {
      connector: () => new BehaviorSubject(100),
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
