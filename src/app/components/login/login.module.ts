import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
// containers
import { LoginComponent } from './login.component';

// routes
export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}