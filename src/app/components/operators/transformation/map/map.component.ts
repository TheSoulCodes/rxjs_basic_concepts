import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    of(1, 2, 3, 4, 5)
      .pipe(map((value) => value * 10))
      .subscribe((data) => console.log(data));

    of(1, 2, 3, 4, 5)
      .pipe(
        filter((value) => value % 2 === 0),
        map((value) => value * 10)
      )
      .subscribe((data) => console.log(data));
  }

  ngAfterViewInit(): void {
    const mapButtonEvent = fromEvent(
      document.getElementById('map_button')!,
      'click'
    );

    mapButtonEvent
      .pipe(
        map((event: Event) => {
          return {
            x: (event as PointerEvent).clientX,
            y: (event as PointerEvent).clientY,
          };
        })
      )
      .subscribe((data) => console.log(data));
  }
}
