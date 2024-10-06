import { Component, OnInit } from '@angular/core';
import { concatMapTo, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-to',
  standalone: true,
  imports: [],
  templateUrl: './concat-map-to.component.html',
  styleUrl: './concat-map-to.component.scss',
})
export class ConcatMapToComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(concatMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`)))
      .subscribe((data) => console.log(data.response));
  }
}
