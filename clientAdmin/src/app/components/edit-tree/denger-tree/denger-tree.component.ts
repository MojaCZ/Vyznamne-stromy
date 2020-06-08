import { Component, OnInit} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ActivatedRoute } from '@angular/router'
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Dangers} from '../../../../../../lib/src';


@Component({
  selector: 'app-denger-tree',
  templateUrl: './denger-tree.component.html',
  styleUrls: ['./denger-tree.component.scss']
})
export class DengerTreeComponent implements OnInit {
  
  dangerStructure: any = Dangers;

  constructor() {

  }

  ngOnInit(): void {
    // this.route.data.subscribe(data => {
    //   console.log(data)
    //   this.dangerStructure = data.Config.dangers;
    // });
  }

}
