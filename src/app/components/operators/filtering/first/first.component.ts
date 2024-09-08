import { Component, OnInit } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent implements OnInit {
  ngOnInit(): void {
    // of(1, 2, 3, 4, 5, 6, 7, 8)
    //   .pipe(first())
    //   .subscribe({
    //     next: (data) => console.log(data),
    //     error: (err) => console.log(err),
    //     complete: () => console.log('Complete'),
    //   });

    of(1, 2, 3, 4, 5, 6, 7, 8)
      .pipe(first((value) => value % 2 == 0, 10))
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('Complete'),
      });
  }
}
