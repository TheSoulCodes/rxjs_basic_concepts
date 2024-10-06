import { Component, OnInit } from '@angular/core';
import { map, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss',
})
export class MergeMapComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        mergeMap((id) =>
          ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
        )
      )
      .subscribe((data) => console.log(data.response));
  }
}
