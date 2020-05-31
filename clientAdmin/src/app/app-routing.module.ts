import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AdminTreeComponent } from './components/admin-tree/admin-tree.component';
import { TreesTableComponent } from './components/trees-table/trees-table.component';
import { PrintTreeComponent } from './components/print-tree/print-tree.component';
import { NewTreeComponent} from './components/new-tree/new-tree.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';

// SERVICES


const routes: Routes = [
  {
    path: '',
    component: TreesTableComponent
  },
  {
    path: 'strom/:id',
    component: AdminTreeComponent
  },
  {
    path: 'print',
    component: PrintTreeComponent
  },
  {
    path: 'new-tree',
    component: NewTreeComponent
  },
  {
    path: 'users',
    component: ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
