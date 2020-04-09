import { Component, OnInit, Input } from '@angular/core';
import { ClassificationDataService } from '../../services/classification-data.service';

@Component({
  selector: 'app-classification-btn-group',
  templateUrl: './classification-btn-group.component.html',
  styleUrls: ['./classification-btn-group.component.scss']
})
export class ClassificationBtnGroupComponent implements OnInit {
  @Input() I: number;
  @Input() H: string;
  checkboxes: Array<any> = [{}];

  constructor(private K: ClassificationDataService) {  }

  ngOnInit(): void {
    for(let i=0; i<this.I; i++) {
      this.checkboxes.push({value: false})
    }
    this.checkboxes[0].value = true;

  }

  // change(id) is here for handeling checking logic of radio group
  change(id){
    // I am only interested in switching values if clicked is not checked
    // I want one always checked, so switching from true to false on clicked makes no sense
    if ( this.checkboxes[id].value == false ) {
      for (let j=0; j<this.checkboxes.length; j++) {
        this.checkboxes[j].value = false;
      }
      this.checkboxes[id].value = true;
    }
  }

}
