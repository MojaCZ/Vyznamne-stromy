import { Component, OnInit } from '@angular/core';
import { AdminTableService } from '../../services/admin-table.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {
  data: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.data = data.Admin);
    console.log(this.data)
  }

}
