import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danger-tree-node',
  templateUrl: './danger-tree-node.component.html',
  styleUrls: ['./danger-tree-node.component.scss']
})
export class DangerTreeNodeComponent implements OnInit {
  @Input() data: any;
  folded: boolean = false
  grades: boolean[] = [];
  mainChecked: boolean;
  mainIndeterminate: boolean;
  constructor() {
  }

  ngOnInit(): void {
    for(let i:number = 0; i<this.data.value.grades.length; i++) {
      this.grades.push(false)
    }
    this.grades[1] = true
    this.checkAll()
  }

  fold(){
    this.folded = !this.folded
  }

  changeAll(){
    this.mainChecked = !this.mainChecked
    this.mainIndeterminate = false;
    for(let i:number = 0; i<this.grades.length; i++) {
      this.grades[i] = this.mainChecked
    }
  }

  // check all subcheckboxes and if all are checked, return true
  checkAll():void {
    let allChecked : boolean = true
    let noneChecked : boolean = false

    for(let i:number = 0; i<this.grades.length; i++) {
      if(this.grades[i]) {
        noneChecked = true
      } else {
        allChecked = false;
      }
    }

    if(allChecked) {  // all checkboxes are checked
      console.log("ALL CHECKED")
      this.mainIndeterminate = false;
      this.mainChecked = true;
    } else {
      console.log("SOME CHECKED")
      this.mainChecked = false;
      if(noneChecked) { // non of the checkboxes is checked
        this.mainIndeterminate = true;
      } else {  // some are checked
        console.log("SOME ARE CHECKED")
        this.mainIndeterminate = false;
      }
    }

  }

}
