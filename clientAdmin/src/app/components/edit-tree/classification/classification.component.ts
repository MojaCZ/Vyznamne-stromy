import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditTreeService } from '../../../services/edit-tree.service';
import { ClassificationInterface } from '../../../../../../lib/src';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})

export class ClassificationComponent implements OnInit {
  public kData: number[][];
  public configData: ClassificationInterface[];
  public kValues: number[] = [0, 0, 0, 0, 0];

  constructor(
    public editTreeService: EditTreeService,
    public cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.configData = this.editTreeService.ConfKData;
    this.editTreeService.kValuesSubject.subscribe((data: number[]) => {
      console.log("DATA", data);
      this.kValues = data;
      this.cdr.detectChanges()

    });
  }



}
