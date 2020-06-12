import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamsComponent } from './components/params/params.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { DoneComponent } from './components/done/done.component';

const addTreeRoutes: Routes = [
  {
    path: 'parameters',
    component: ParamsComponent
  }, {
    path: 'kategorie/:kategorie',
    component: ClassificationComponent
  }, {
    path: 'done',
    component: DoneComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(addTreeRoutes)],
  exports: [RouterModule]
})
export class AddTreeRoutingModule { }
