import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AddTreeModule } from '../add-tree.module';
import { TreeI, Tree, ClassificationSchema, ClassificationInterface } from '../../../../../../lib/src';
import { environment } from '../../../../environments/environment';

@Injectable()

export class AddTreeService implements OnDestroy {

  public T: TreeI = new Tree();
  public kData: number[][] = [];
  public ConfKData: ClassificationInterface[];

  constructor(private http: HttpClient) {
    this.ConfKData = ClassificationSchema;
    for (let k = 0; k < ClassificationSchema.length; k++) {
      const kRow = [];
      for (let subK = 0; subK < ClassificationSchema[k].I; subK++) {
        kRow.push(0);
      }
      this.kData.push(kRow);
    }
  }

  send() {
    this.parseKateg();
    const body = this.allTogether();
    console.log('url', environment);
    console.log('route',  `${environment.server}/tree/addTreeUser`);
    this.http
      .post(
        `${environment.server}/tree/addTreeUser`,
        body,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
      .subscribe((data: any) => {
        console.log(data);
        if (data.status === 'ok') {
          console.log('all good, congratulations');
        }
      });
  }

  allTogether(): string {
    const jsonBody = `{
      "strom":${JSON.stringify(this.T.S)},
      "lokal":${JSON.stringify(this.T.L)},
      "pisemneD":${JSON.stringify(this.T.PD)},
      "obrazoveD":${JSON.stringify(this.T.OD)},
      "kateg":${JSON.stringify(this.T.K)},
      "comment":${JSON.stringify(this.T.C)},
      "ohro":${JSON.stringify(this.T.O)}
    }`;
    return jsonBody;
  }

  parseKateg = () => {
    console.log(this.kData)
    for (let i = 0; i < this.kData.length; i++) {
      let row = `${this.kData[i][0]}`;

      for (let j = 1; j < this.kData[i].length; j++) {
        row += `,${this.kData[i][j]}`;
      }
      this.T.K[`KATEG${ i + 1 }`] = row;
    }
  }

  ngOnDestroy() {
    console.log('Im destroyed');
  }
}
