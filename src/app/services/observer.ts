import { Observer } from 'rxjs';

export class observer4 implements Observer<number> {
  next(data: number) {
    console.log('Observer 4 Class', data);
  }

  error(error: string) {
    console.log(error);
  }

  complete() {
    console.log('Observer 4 Completed!');
  }
}
