import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
// import { delay } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class AdminTableService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve():Observable<any> {
    return this.http.get("assets/admin-data.json").pipe(share());
  }

}
