import { Component, OnInit } from '@angular/core';
import { last, of } from 'rxjs';

@Component({
  selector: 'app-last',
  standalone: true,
  imports: [],
  templateUrl: './last.component.html',
  styleUrl: './last.component.scss',
})
export class LastComponent implements OnInit {
  ngOnInit(): void {
    // of(1, 2, 3, 4, 5, 6, 7, 8, 9)
    //   .pipe(last())
    //   .subscribe((data) => console.log(data));

    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(last((value) => value > 6, 10))
      .subscribe((data) => console.log(data));
  }
}
