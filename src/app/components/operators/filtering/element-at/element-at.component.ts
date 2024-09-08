import { Component, OnInit } from '@angular/core';
import { elementAt, of } from 'rxjs';

@Component({
  selector: 'app-element-at',
  standalone: true,
  imports: [],
  templateUrl: './element-at.component.html',
  styleUrl: './element-at.component.scss',
})
export class ElementAtComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(elementAt(2, 10)) // 10 is default value
      .subscribe((data) => console.log(data));
  }
}
