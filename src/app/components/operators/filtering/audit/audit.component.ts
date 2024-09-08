import { Component, OnDestroy, OnInit } from '@angular/core';
import { audit, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss',
})
export class AuditComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = interval(1000)
      .pipe(audit((val) => interval(2000)))
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }
}
