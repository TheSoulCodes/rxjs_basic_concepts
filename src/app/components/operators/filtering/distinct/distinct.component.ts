import { Component, OnInit } from '@angular/core';
import { distinct, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  standalone: true,
  imports: [],
  templateUrl: './distinct.component.html',
  styleUrl: './distinct.component.scss',
})
export class DistinctComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6, 4, 3, 4, 5, 4, 3)
      .pipe(distinct())
      .subscribe((data) => console.log(data));

    let employees = [
      { id: 1, name: 'first' },
      { id: 2, name: 'first dev' },
      { id: 3, name: 'first' },
    ];

    from(employees)
      .pipe(distinct((x) => x.name))
      .subscribe((data) => console.log(data));
  }
}
