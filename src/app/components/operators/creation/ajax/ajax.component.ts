import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  standalone: true,
  imports: [],
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.scss',
})
export class AjaxComponent implements OnInit {
  ngOnInit(): void {
    // ajax(`https://jsonplaceholder.typicode.com/posts`)
    //   .pipe(
    //     map((response: any) => {
    //       let data = [];
    //       for (let post of response.response) {
    //         data.push(post.title);
    //       }
    //       return data;
    //     })
    //   )
    //   .subscribe((data) => console.log(data));

    ajax
      .getJSON(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((data) => console.log(data));
  }
}
