import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TreesTableDataSource, TreesTableItem } from './trees-table-datasource';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-trees-table',
  templateUrl: './trees-table.component.html',
  styleUrls: ['./trees-table.component.scss']
})
export class TreesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TreesTableItem>;
  dataSource: TreesTableDataSource;

  constructor(private http: HttpClient) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'type', 'K', 'K1', 'K2', 'K3', 'K4', 'K5', 'validate', 'iconEdit', 'iconPrint', 'iconDelete'];

  ngOnInit() {
    this.dataSource = new TreesTableDataSource([]);
    this.getData();
  }

  getData() {
    const start = 0;
    const n = 10;
    const body = `start=${start}&n=${n}`;
    this.http
      .post(
        `${environment.server}/tree/getNTrees`,
        body,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        })
      .subscribe(
        (data: any) => {
          if (!data.trees) {
            return;
          }
          const newData: TreesTableItem[] = [];
          for (const tree of data.trees) {
            const item: TreesTableItem = {
              id: tree.id,
              date: tree.S.DATIN,
              type: tree.S.TYP_OBJ,
              K: 0,
              K1: tree.K.KATEG1,
              K2: tree.K.KATEG2,
              K3: tree.K.KATEG3,
              K4: tree.K.KATEG4,
              K5: tree.K.KATEG5,
              validate: tree.S.PRIJEM === 0 ? false : true,
              iconEdit: tree,
              iconPrint: tree.id,
              iconDelete: tree.id
            };
            newData.push(item);
          }
          this.refresh(newData);
        });
  }

  refresh(newData: TreesTableItem[]) {
    this.dataSource = new TreesTableDataSource(newData);
    this.ngAfterViewInit();
  }

  delete(id) {
    const body = `id=${id}`;
    this.http
      .post(
        `${environment.server}/tree/deleteId`,
        body,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        })
      .subscribe((data: any) => {
        if (data.status === 'ok') {
          const newData: TreesTableItem[] = this.dataSource.remove(id);
          this.refresh(newData);
        }
      });
  }

  edit(tree: TreesTableItem) {
    console.log(tree);
  }



  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
