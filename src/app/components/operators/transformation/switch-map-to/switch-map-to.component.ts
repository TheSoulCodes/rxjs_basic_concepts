import { Component, OnInit } from '@angular/core';
import { of, switchMapTo } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map-to',
  standalone: true,
  imports: [],
  templateUrl: './switch-map-to.component.html',
  styleUrl: './switch-map-to.component.scss',
})
export class SwitchMapToComponent implements OnInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(switchMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`)))
      .subscribe((data) => console.log(data.response));
  }
}
