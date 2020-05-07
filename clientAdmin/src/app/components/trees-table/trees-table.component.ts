import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TreesTableDataSource, TreesTableItem } from './trees-table-datasource';

@Component({
  selector: 'app-trees-table',
  templateUrl: './trees-table.component.html',
  styleUrls: ['./trees-table.component.scss']
})
export class TreesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TreesTableItem>;
  dataSource: TreesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['species', 'date', 'type', 'K', 'K1', 'K2', 'K3', 'K4', 'K5', 'validate', 'iconEdit', 'iconPrint', 'iconDelete'];

  ngOnInit() {
    this.dataSource = new TreesTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
