import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ClassificationBtnGroupComponent }  from './components/classification-section/classification-btn-group/classification-btn-group.component';
import { NavigationComponent }              from './components/navigation/navigation.component';
import { ClassificationSectionComponent }   from './components/classification-section/classification-section.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { AddTreeComponent } from './components/add-tree/add-tree.component';

import { ClassificationDataService }           from './services/classification-data/classification-data.service';
import { ConfigService }           from './services/config/config.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassificationBtnGroupComponent,
    NavigationComponent,
    ClassificationSectionComponent,
    InfoDialogComponent,
    AddTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InfoDialogComponent]
})
export class AppModule { }
