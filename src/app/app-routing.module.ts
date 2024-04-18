import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IplistComponent } from './wsiplist/iplist/iplist.component';
import { UserlistComponent } from './wsuserlist/userlist/userlist.component';
import { RoleslistComponent } from './wsroleslist/roleslist/roleslist.component';
import { LoginComponent } from './login/login/login.component';
import { MenuComponent } from './menu/menu.component';



 

const routes: Routes = [
   { path: 'wsips' ,    component:IplistComponent }, 
   { path: 'wsusers',   component:UserlistComponent },
   {path:  'wsroles',   component:RoleslistComponent},
   {path:  'login',   component:LoginComponent},
   {path:  'menu',   component:MenuComponent},
   { path: '', redirectTo: '/login', pathMatch: 'full' },

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
