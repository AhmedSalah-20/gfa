import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserlistComponent } from './wsuserlist/userlist/userlist.component';
import { IplistComponent } from './wsiplist/iplist/iplist.component';
import { RoleslistComponent } from './wsroleslist/roleslist/roleslist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  TableModule } from 'primeng/table';
import { LoginComponent } from './login/login/login.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule, NG_ASYNC_VALIDATORS, NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';










@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    IplistComponent,
    RoleslistComponent,
    LoginComponent,
    MenuComponent,
    
    
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    InputTextModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
