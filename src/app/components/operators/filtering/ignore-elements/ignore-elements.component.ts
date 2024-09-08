import { Component, OnInit } from '@angular/core';
import { ignoreElements, of } from 'rxjs';

@Component({
  selector: 'app-ignore-elements',
  standalone: true,
  imports: [],
  templateUrl: './ignore-elements.component.html',
  styleUrl: './ignore-elements.component.scss',
})
export class IgnoreElementsComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(ignoreElements())
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('completed'),
      });
  }
}
