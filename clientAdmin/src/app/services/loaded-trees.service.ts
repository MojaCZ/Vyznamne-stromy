import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TreeI, Tree, ClassificationSchema, ClassificationInterface } from '../../../../lib/src';
// import { environment } from '../../../../environments/environment';
import { environment } from '../../environments/environment';

@Injectable()

export class LoadedTreesService implements OnDestroy {
  public loadedIDs: number[] = [];
  public loadedTrees: Tree[] = [];
  // public T: TreeI = new Tree();
  // public kData: number[][] = [];
  // public ConfKData: ClassificationInterface[];

  constructor(private http: HttpClient) {
    // this.ConfKData = ClassificationSchema;
    // for (let k = 0; k < ClassificationSchema.length; k++) {
    //   const kRow = [];
    //   for (let subK = 0; subK < ClassificationSchema[k].I; subK++) {
    //     kRow.push(0);
    //   }
    //   this.kData.push(kRow);
    // }
  }

  loadTrees() {
    const body = `start=0&n=100`;
    this.http.post(
      `${environment.server}/tree/getNTrees`,
      body,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
      })
    .subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  send() {
    // this.prepareData();
    // const body = this.allTogether();
    // this.http
    //   .post(
    //     `${environment.server}/tree/addTreeUser`,
    //     body,
    //     {
    //       headers: new HttpHeaders().set('Content-Type', 'application/json'),
    //     })
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     if (data.message.status === 'ok') {
    //       console.log(`strom byl v pořádku přijat, gratuluji!, ID přidaného stromu je: ${data.message.id}`);
    //     } else {
    //       console.log(`Vyskytla se chyba!, zpráva je: ${data.message.message}`);

    //     }
    //   });
  }

  allTogether() {
    // const jsonBody = `
    // {
    //   "strom":${JSON.stringify(this.T.S)},
    //   "lokal":${JSON.stringify(this.T.L)},
    //   "pisemneD":${JSON.stringify(this.T.PD)},
    //   "obrazoveD":${JSON.stringify(this.T.OD)},
    //   "kateg":${JSON.stringify(this.T.K)},
    //   "comment":${JSON.stringify(this.T.C)},
    //   "ohro":${JSON.stringify(this.T.O)}
    // }`;
    // return jsonBody;
  }

  prepareData = () => {
    // for (let i = 0; i < this.kData.length; i++) {
    //   let row = `${this.kData[i][0]}`;

    //   for (let j = 1; j < this.kData[i].length; j++) {
    //     row += `,${this.kData[i][j]}`;
    //   }
    //   this.T.K[`KATEG${i + 1}`] = row;
    // }
    // if (this.T.S.DATIN instanceof Date) {
    //   this.T.S.DATIN = `${this.T.S.DATIN.getDate()}.${this.T.S.DATIN.getMonth()}.${this.T.S.DATIN.getFullYear()}`;
    // }

    // // TODO this should be filled by form
    // this.T.S.VLAST = 'APPVS';
    // this.T.OD.URL[0] = 'someURL';
    // this.T.PD.URL[0] = 'someURL';
  }

  ngOnDestroy() {
    // console.log('Im destroyed');
  }
}
