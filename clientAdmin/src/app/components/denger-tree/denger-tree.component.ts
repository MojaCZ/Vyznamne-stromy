import { Component, OnInit} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ActivatedRoute } from '@angular/router'
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-denger-tree',
  templateUrl: './denger-tree.component.html',
  styleUrls: ['./denger-tree.component.scss']
})
export class DengerTreeComponent implements OnInit {
  dangerStructure: any;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.dangerStructure = data.Config.dangers)
  }

}
