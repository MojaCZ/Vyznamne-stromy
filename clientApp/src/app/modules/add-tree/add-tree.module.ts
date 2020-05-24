import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { AddTreeRoutingModule } from './add-tree-routing.module';
import { ParamsComponent } from './components/params/params.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { BtnGroupComponent } from './components/classification/btn-group/btn-group.component';

import { AddTreeService } from './services/add-tree.service';

@NgModule({
  declarations: [
    ParamsComponent,
    ClassificationComponent,
    BtnGroupComponent
  ],
  imports: [
    CommonModule,
    AddTreeRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AddTreeService
  ]
})
export class AddTreeModule {  }
