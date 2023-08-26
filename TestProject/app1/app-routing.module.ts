import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent  } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import {LoginComponent} from './users/login/login.component'
import {SignupComponent} from './users/signup/signup.component'

const routes: Routes = [
  
{path:'login' , component:LoginComponent},
{path:'signup', component:SignupComponent}

  ,
  {
    path:'**',
    component:PageNotFoundComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
