import { Component, OnInit, Input } from '@angular/core';
// import { ClassificationDataService } from '../../../services/classification-data.service';
import { MatDialog } from '@angular/material/dialog'
import { InfoDialogComponent } from '../../info-dialog/info-dialog.component'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-classification-btn-group',
  templateUrl: './classification-btn-group.component.html',
  styleUrls: ['./classification-btn-group.component.scss']
})
export class ClassificationBtnGroupComponent implements OnInit {
  @Input() D: any;

  constructor(private dialog: MatDialog) {  }

  ngOnInit(): void {
  }

  getValues(val) {
    console.log("hodnota", val)
  }

  openDialog() {
    this.dialog.open(InfoDialogComponent, {data:{title: this.D.H, info: this.D.info}});
  }

}
