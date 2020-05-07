import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
// import { delay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class ClassificationDataService implements Resolve<any> {
  data: Object = null;

  constructor(private http: HttpClient) { }

  resolve() {
    return this.http.get("assets/classification-data.json").pipe(share());
  }

  // getData(): Observable<any> {
  //   // const observable: Observable<any> = Observable.create(observer => {
  //   //   observer.next("HALLO HERE I AM");
  //   //   observer.complete();
  //   // })
  //   // return observable.pipe(delay(2000));
  //   return this.http.get("assets/classification-data.json").pipe(share());
  // }

}
