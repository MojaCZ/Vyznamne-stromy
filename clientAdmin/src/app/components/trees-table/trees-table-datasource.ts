import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TreesTableItem {
  species: string;
  date: string;
  type: string;
  K:number;
  K1:number;
  K2:number;
  K3:number;
  K4:number;
  K5:number;
  validate:boolean;
  iconEdit: string;
  iconPrint: string;
  iconDelete: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TreesTableItem[] = [
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:5, K1:1, K2:3, K3:4, K4:0, K5:10, validate:false, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:1, K1:1, K2:3, K3:4, K4:0, K5:10, validate:true, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:6, K1:1, K2:3, K3:4, K4:0, K5:11, validate:false, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:4, K1:1, K2:3, K3:4, K4:0, K5:0, validate:true, iconEdit:"edit", iconPrint:"print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:8, K1:1, K2:3, K3:4, K4:0, K5:20, validate:true, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:6, K1:1, K2:3, K3:4, K4:0, K5:1.3, validate:true, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:6, K1:1, K2:3, K3:4, K4:0, K5:2.3, validate:false, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" },
  {species: 'topol', date: '5.5.2015', type: 'stromořadí', K:1, K1:1, K2:3, K3:4, K4:0, K5:3.3, validate:false, iconEdit:"edit", iconPrint: "print", iconDelete: "delete" }
];

/**
 * Data source for the TreesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TreesTableDataSource extends DataSource<TreesTableItem> {
  data: TreesTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TreesTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TreesTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TreesTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'species': return compare(a.species, b.species, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'K': return compare(+a.K, +b.K, isAsc);
        case 'K1': return compare(+a.K1, +b.K1, isAsc);
        case 'K2': return compare(+a.K2, +b.K2, isAsc);
        case 'K3': return compare(+a.K3, +b.K3, isAsc);
        case 'K4': return compare(+a.K4, +b.K4, isAsc);
        case 'K5': return compare(+a.K5, +b.K5, isAsc);
        case 'validate': return compare(+a.validate, +b.validate, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
