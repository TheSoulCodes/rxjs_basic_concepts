import { Component, OnDestroy, OnInit } from '@angular/core';
import { exhaustMap, filter, interval, of, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss',
})
export class ExhaustMapComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5)
    //   .pipe(
    //     exhaustMap((id) =>
    //       ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     )
    //   )
    //   .subscribe((data) => console.log(data.response));

    this.intervalSubscription = interval(2000)
      .pipe(
        filter((id) => id > 0 && id <= 200),
        exhaustMap((id) =>
          ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
        )
      )
      .subscribe((data) => console.log(data.response));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
