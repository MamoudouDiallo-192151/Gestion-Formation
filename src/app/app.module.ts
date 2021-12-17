import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{FlexLayoutModule}from'@angular/flex-layout';
import{MatToolbarModule}from'@angular/material/toolbar';
import{ MatButtonModule} from'@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'allUsers', component: AllUsersComponent },
  { path: 'addUser', component: AddUserComponent,
    //path:  '/', component: HomeComponent,
  },

];


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
