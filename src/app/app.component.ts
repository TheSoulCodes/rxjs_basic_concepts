import { Component, OnInit } from '@angular/core';
import {
  RouterLinkActive,
  RouterOutlet,
  Router,
  RouterLink,
} from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rxjs_basic_concepts';
  operatorsList: any = [
    { label: 'from', path: '/from' },
    { label: 'new_observable', path: '/new_observable' },
    { label: 'functionObs', path: '/function_observable' },
  ];
  selectedOption: string | undefined;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.selectedOption = this.operatorsList[0];
  }

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const path = target.value;
    this.router.navigate([path]);
  }
}
