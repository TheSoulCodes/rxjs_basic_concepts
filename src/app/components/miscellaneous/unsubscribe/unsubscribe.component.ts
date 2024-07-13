import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [NgFor],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.scss',
})
export class UnsubscribeComponent implements OnInit {
  consoleSubscribtion!: Subscription;
  browserSubscribtion!: Subscription;
  timer: number[] = [];

  ngOnInit(): void {
    // const newObservable = interval(1000);
    const newObservable = new Observable<number>((observer) => {
      let i = 0;
      let interval = setInterval(() => {
        console.log('Interval Executing!');
        observer.next(i++);
      }, 1000);

      //Even if the error occures the below method will execute.
      return () => {
        console.log('Called when observer is unsubscribed!');
        clearInterval(interval);
      };
    });

    this.consoleSubscribtion = newObservable.subscribe((data) => {
      console.log(new Date().toLocaleString() + ' ' + data);
    });

    this.browserSubscribtion = newObservable.subscribe((data) => {
      this.timer.push(data);
    });

    this.consoleSubscribtion.add(this.browserSubscribtion);
    //Below line removes subscription from the added subscription.
    // this.consoleSubscribtion.remove(this.browserSubscribtion);
  }

  cancleTimer() {
    console.log('Subscribtion Cancled');
    this.consoleSubscribtion.unsubscribe();
  }
}
