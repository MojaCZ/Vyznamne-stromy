import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(){
    return this.http.get('assets/config-app.json').pipe(share());
  }
}
