import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError,  Observable ,  Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';



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
