import { Component, OnInit } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss',
})
export class SwitchMapComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(
        switchMap((id) =>
          ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
        )
      )
      .subscribe((data) => console.log(data.response));
  }
}
