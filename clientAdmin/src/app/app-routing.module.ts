import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AdminTreeComponent }   from './components/admin-tree/admin-tree.component'
import { TreesTableComponent }  from './components/trees-table/trees-table.component'
import { PrintTreeComponent }   from './components/print-tree/print-tree.component'
import { NewTreeComponent}      from './components/new-tree/new-tree.component'
import { ListUsersComponent }        from './components/users/list-users/list-users.component'

// SERVICES
import { AdminTableService }    from './services/admin-table/admin-table.service'
import { ConfigService }        from './services/config/config.service'


const routes: Routes = [
  {
    path: "",
    component: TreesTableComponent,
    // resolve: { Admin: AdminTableService }
  },
  {
    path: "strom",
    component: AdminTreeComponent,
    resolve: { Config: ConfigService }
  },
  {
    path: "print",
    component: PrintTreeComponent,
    // resolve: { Admin: AdminTableService }
  },
  {
    path: "new-tree",
    component: NewTreeComponent,
    // resolve: { Admin: AdminTableService }
  },
  {
    path: "users",
    component: ListUsersComponent,
    // resolve: { Admin: AdminTableService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
