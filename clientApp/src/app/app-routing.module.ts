import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassificationDataService } from './services/classification-data/classification-data.service';
import { ConfigService } from './services/config/config.service';
import { ClassificationSectionComponent } from './components/classification-section/classification-section.component';
import { AddTreeComponent } from './components/add-tree/add-tree.component'

const routes: Routes = [
  {
    path: "",
    component: AddTreeComponent,
    resolve: { config: ConfigService }
  },
  {
    path: 'kategorie/:kategorie',
    component: ClassificationSectionComponent,
    resolve: { Kategorie: ClassificationDataService }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
