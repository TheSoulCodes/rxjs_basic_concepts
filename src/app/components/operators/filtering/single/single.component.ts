import { Component, OnInit } from '@angular/core';
import { of, single } from 'rxjs';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
})
export class SingleComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2)
      .pipe(single((value) => value % 2 == 0))
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Completed'),
      });
  }
}
