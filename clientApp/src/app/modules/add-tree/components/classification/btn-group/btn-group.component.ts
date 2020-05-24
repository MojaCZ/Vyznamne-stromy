import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../../../../../components/info-dialog/info-dialog.component';
import { AddTreeService } from '../../../services/add-tree.service';

@Component({
  selector: 'app-btn-group',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.scss']
})
export class BtnGroupComponent implements OnInit {
  /** */
  @Input() kategorie: number;
  @Input() groupIndex: number;
  groupData: any;

  public checkedArray: boolean[] = [false];

  constructor(private dialog: MatDialog, private addTreeService: AddTreeService) { 

  }

  ngOnInit() {
    this.groupData = this.addTreeService.ConfKData[0].subCat[this.groupIndex];
    for(let i = 0; i < this.groupData.I; i++) {
     this.checkedArray.push(false);
    }
    this.checkedArray[ this.addTreeService.kData [this.kategorie][this.groupIndex] ] = true;
  }

  getValues(i: number) {
    console.log('hodnota', i);
  }

  openDialog() {
    this.dialog.open(InfoDialogComponent, {data: { title: this.groupData.H, info: this.groupData.info}});
  }

}
