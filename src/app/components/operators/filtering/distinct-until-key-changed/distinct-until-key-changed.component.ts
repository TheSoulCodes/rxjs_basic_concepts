import { Component, OnInit } from '@angular/core';
import { distinctUntilKeyChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed',
  standalone: true,
  imports: [],
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrl: './distinct-until-key-changed.component.scss',
})
export class DistinctUntilKeyChangedComponent implements OnInit {
  ngOnInit(): void {
    let employees = [
      { id: 1, name: 'first' },
      { id: 2, name: 'third' },
      { id: 3, name: 'third' },
      { id: 4, name: 'fourth' },
      { id: 4, name: 'first' },
    ];

    // from(employees)
    //   .pipe(distinctUntilKeyChanged('name'))
    //   .subscribe((data) => console.log(data));

    from(employees)
      .pipe(
        distinctUntilKeyChanged('name', (prev, curr) => {
          return prev.substring(0, 4) == curr.substring(0, 4);
        })
      )
      .subscribe((data) => console.log(data));
  }
}
