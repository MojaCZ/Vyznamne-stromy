import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassificationDataService } from './services/classification-data/classification-data.service';
import { ConfigService } from './services/config/config.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/add-tree/add-tree.module').then(m => m.AddTreeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
