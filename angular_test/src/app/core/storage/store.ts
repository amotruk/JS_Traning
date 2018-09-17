import {BehaviorSubject, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

export class Store<T> {
  protected broadcast: BehaviorSubject<T>;
  protected defaultState: T = {} as T;

  constructor(protected data: T) {
    Object.assign(this.defaultState, data);
    this.broadcast = new BehaviorSubject(data);
  }

  get(): T {
    return this.data;
  }

  select<U>(func: (data: T) => U): U {
    return func(this.get());
  }

  $get(): Observable<T> {
    return this.broadcast.asObservable();
  }

  $select<U>(func: (data: T) => U): Observable<U> {
    return this.$get().pipe(map(func));
  }

  update(data: T): void {
    this.data = data;
    this.broadcast.next(this.data);
  }

  clean(): void {
    this.data = this.defaultState;
    this.broadcast.next(this.data);
  }
}
