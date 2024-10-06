import { Component, OnInit } from '@angular/core';
import { mergeMapTo, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map-to',
  standalone: true,
  imports: [],
  templateUrl: './merge-map-to.component.html',
  styleUrl: './merge-map-to.component.scss',
})
export class MergeMapToComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(mergeMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`)))
      .subscribe((data) => console.log(data.response));
  }
}
