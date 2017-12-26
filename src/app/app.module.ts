import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from '../home/home.component';
import { CreateUserComponent } from '../user/create.user.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'users', component: UserComponent},
  { path: ' ', component: HomeComponent},
  { path: 'createuser', component: CreateUserComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    CreateUserComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
