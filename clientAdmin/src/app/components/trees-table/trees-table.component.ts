import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TreesTableDataSource, TreesTableItem } from './trees-table-datasource';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-trees-table',
  templateUrl: './trees-table.component.html',
  styleUrls: ['./trees-table.component.scss']
})
export class TreesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TreesTableItem>;
  dataSource: TreesTableDataSource;

  constructor(private http: HttpClient, private changeDetectorRefs: ChangeDetectorRef){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'type', 'K', 'K1', 'K2', 'K3', 'K4', 'K5', 'validate', 'iconEdit', 'iconPrint', 'iconDelete'];

  ngOnInit() {
    this.dataSource = new TreesTableDataSource([]);
    this.getData();
  }

  getData(){
    this.http
      .post(
        `${environment.server}/tree/getNTrees`,
        { start: 5, n: 10 },
        {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        })
      .subscribe((data: any) => {
        const treesData: TreesTableItem[] = [];
        for (const tree of data.trees) {
          const item: TreesTableItem = {
            date: tree.S.DATIN,
            type: tree.S.TYP_OBJ,
            K: 0,
            K1: tree.K.KATEG1,
            K2: tree.K.KATEG2,
            K3: tree.K.KATEG3,
            K4: tree.K.KATEG4,
            K5: tree.K.KATEG5,
            validate: tree.S.PRIJEM === 0 ? false : true,
            iconEdit: tree.id,
            iconPrint: tree.id,
            iconDelete: tree.id
          };
          treesData.push(item);
        }
        this.dataSource = new TreesTableDataSource(treesData);
        this.ngAfterViewInit();
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  delete(id) {
    console.log(id);
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      body: {
        id,
      }
    };
    this.http
      .request(
        'DELETE',
        `${environment.server}/tree`,
        {
          headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
          body: { id }
        })
      .subscribe((data: any) => { console.log(data); });
  }
}
