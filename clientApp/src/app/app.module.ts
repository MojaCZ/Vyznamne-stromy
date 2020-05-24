import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


// components
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';

// services
import { ClassificationDataService } from './services/classification-data/classification-data.service';
import { ConfigService } from './services/config/config.service';

// modules
import { AddTreeModule } from './modules/add-tree/add-tree.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddTreeModule,
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
