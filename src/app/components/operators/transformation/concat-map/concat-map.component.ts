import { Component, OnInit } from '@angular/core';
import { concatMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss',
})
export class ConcatMapComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        concatMap((id) =>
          ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
        )
      )
      .subscribe((data) => console.log(data.response));
  }
}
