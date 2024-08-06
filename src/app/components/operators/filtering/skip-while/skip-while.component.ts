import { Component, OnInit } from '@angular/core';
import { of, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  standalone: true,
  imports: [],
  templateUrl: './skip-while.component.html',
  styleUrl: './skip-while.component.scss',
})
export class SkipWhileComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6, 7, 8, 1, 2)
      .pipe(skipWhile((x) => x < 3))
      .subscribe((data) => console.log(data));
  }
}
