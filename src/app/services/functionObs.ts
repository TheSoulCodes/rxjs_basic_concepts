import { Observable } from 'rxjs';

export function functionObs() {
  console.log(' function Call');
  return '1';
}

export const funcObservable = new Observable((observer) => {
  console.log('Observer Call');
  observer.next('1');
  observer.next('2');
  setTimeout(() => {
    observer.next('3');
  }, 2000);
});
