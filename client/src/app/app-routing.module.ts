import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassificationSectionComponent } from './components/classification-section/classification-section.component'
import { AdminTableComponent }            from './components/admin-table/admin-table.component'

import { ClassificationDataService } from './services/classification-data.service'
import { AdminTableService } from './services/admin-table.service'

const routes: Routes = [
  {
    path: "",
    component: ClassificationSectionComponent,
    resolve: { Kategorie: ClassificationDataService }
  },
  {
    path: 'kategorie/:kategorie',
    component: ClassificationSectionComponent,
    resolve: { Kategorie: ClassificationDataService }
  },
  {
    path: 'admin',
    component: AdminTableComponent,
    resolve: { Admin: AdminTableService }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
