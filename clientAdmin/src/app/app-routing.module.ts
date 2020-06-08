import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { EditTreeComponent } from './components/edit-tree/edit-tree.component';
import { TreesTableComponent } from './components/trees-table/trees-table.component';
import { PrintTreeComponent } from './components/print-tree/print-tree.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';

// SERVICES


const routes: Routes = [
  {
    path: '',
    component: TreesTableComponent
  },
  {
    path: 'strom/:id',
    component: EditTreeComponent
  },
  {
    path: 'print',
    component: PrintTreeComponent
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
