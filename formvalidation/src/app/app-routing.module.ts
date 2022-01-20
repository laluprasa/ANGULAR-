import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './Guards/auth.guard';
import { UnsavedGuard } from './Guards/unsaved.guard';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"aboutus",component:AboutusComponent,canActivate:[AuthGuard]},
  {path:"contactus",component:ContactusComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:"regestration",component:RegestrationComponent ,canActivate:[AuthGuard]},
  {path:"users",component:UsersComponent,canActivate:[AuthGuard]},
  {path:"",redirectTo:"",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
