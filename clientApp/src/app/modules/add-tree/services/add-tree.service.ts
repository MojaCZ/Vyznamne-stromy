import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AddTreeModule } from '../add-tree.module';
import { TreeI, Tree, ClassificationSchema, ClassificationInterface } from '../../../../../../lib/src';

@Injectable()



export class AddTreeService implements OnDestroy {

  public T: TreeI = new Tree();
  public kData: number[][] = [];
  public ConfKData: ClassificationInterface[];

  constructor(private http: HttpClient) {
    this.ConfKData = ClassificationSchema
    console.log('service constructed', this.T);
    for (let k:number = 0; k<ClassificationSchema.length; k++) {
      let kRow = []
      for (let subK:number = 0; subK < ClassificationSchema[k].I; subK++){
        kRow.push(0);
      }
      this.kData.push(kRow);
    }
    console.log(this.kData);
  }

  ngOnDestroy(){
    console.log('Im destroyed');
  }
}
