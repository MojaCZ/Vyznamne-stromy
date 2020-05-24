import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamsComponent } from './components/params/params.component';
import { ClassificationComponent } from './components/classification/classification.component';
const addTreeRoutes: Routes = [
  {
    path: 'parameters',
    component: ParamsComponent
  }, {
    path: 'kategorie/:kategorie',
    component: ClassificationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(addTreeRoutes)],
  exports: [RouterModule]
})
export class AddTreeRoutingModule { }
