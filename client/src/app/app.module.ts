import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClassificationBtnGroupComponent }  from './components/classification-btn-group/classification-btn-group.component';
import { NavigationComponent }              from './components/navigation/navigation.component';
import { ClassificationSectionComponent }   from './components/classification-section/classification-section.component';
import { AdminTableComponent }              from './components/admin-table/admin-table.component';
import { AdminTreeComponent }               from './components/admin-tree/admin-tree.component'
import { ClassificationDataService }           from './services/classification-data.service';
import { AdminTableService }                from './services/admin-table.service';
import { WeightsService }                   from './services/weights.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassificationBtnGroupComponent,
    NavigationComponent,
    ClassificationSectionComponent,
    AdminTableComponent,
    AdminTreeComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
