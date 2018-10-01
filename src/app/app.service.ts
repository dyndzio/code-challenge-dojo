import {  Observable ,  Subject } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable()

export class AppService {
    private subject = new Subject<any>();
  constructor() {
    }

  changeDisplayState(state: boolean) {
      this.subject.next(state);
  }

  getDisplayState(): Observable<any> {
        return this.subject.asObservable();
    }
}
