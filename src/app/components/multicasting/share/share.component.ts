import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, publish, refCount, share, Subscription } from 'rxjs';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [],
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss',
})
export class ShareComponent implements OnInit, OnDestroy {
  intervalSubscription1?: Subscription;
  intervalSubscription2?: Subscription;

  ngOnInit(): void {
    // let source$ = interval(2000).pipe(publish(), refCount()); // refCpount will connect if there atleat one subscription is present.

    let source$ = interval(2000).pipe(share());
    this.intervalSubscription1 = source$.subscribe((data) => console.log(data));

    setTimeout(() => {
      this.intervalSubscription2 = source$.subscribe((data) =>
        console.log(data)
      );
    }, 3000);
  }

  ngOnDestroy(): void {
    this.intervalSubscription1?.unsubscribe();
    this.intervalSubscription2?.unsubscribe();
  }
}
