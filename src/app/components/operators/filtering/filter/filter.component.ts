import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, fromEvent, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit, OnDestroy {
  eventSubscription!: Subscription;
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(filter((value) => value > 3))
      .subscribe((data) => console.log(data));

    this.eventSubscription = fromEvent(document, 'click')
      .pipe(
        filter((event: Event) => {
          return (event.target as HTMLElement).tagName == 'BUTTON';
        })
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.eventSubscription?.unsubscribe();
  }
}
