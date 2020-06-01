import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.module';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdminTreeComponent } from './components/admin-tree/admin-tree.component';
import { TreesTableComponent } from './components/trees-table/trees-table.component';
import { PrintTreeComponent } from './components/print-tree/print-tree.component';
import { NewTreeComponent } from './components/new-tree/new-tree.component';
import { DengerTreeComponent } from './components/denger-tree/denger-tree.component';
import { DangerTreeNodeComponent } from './components/denger-tree/danger-tree-node/danger-tree-node.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';

// SERVICES
import { LoadedTreesService } from './services/loaded-trees.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminTreeComponent,
    TreesTableComponent,
    PrintTreeComponent,
    NewTreeComponent,
    DengerTreeComponent,
    DangerTreeNodeComponent,
    ListUsersComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LoadedTreesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
