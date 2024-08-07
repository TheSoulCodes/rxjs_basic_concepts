import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  standalone: true,
  imports: [],
  templateUrl: './distinct-until-changed.component.html',
  styleUrl: './distinct-until-changed.component.scss',
})
export class DistinctUntilChangedComponent implements OnInit {
  ngOnInit(): void {
    // of(1, 2, 2, 2, 4, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8)
    //   .pipe(distinctUntilChanged())
    //   .subscribe((data) => console.log(data));

    // of(1, 2, 3, 4)
    //   .pipe(
    //     distinctUntilChanged((prev, curr) => {
    //       return curr == prev + 1;
    //     })
    //   )
    //   .subscribe((data) => console.log(data));

    let itemList = [
      { id: 1, name: 'first' },
      { id: 2, name: 'first' },
      { id: 3, name: 'first' },
      { id: 4, name: 'second' },
    ];

    from(itemList)
      .pipe(
        distinctUntilChanged(
          (prev, curr) => {
            return prev == curr;
          },
          (k) => k.name
        )
      )
      .subscribe((data) => console.log(data));
  }
}
