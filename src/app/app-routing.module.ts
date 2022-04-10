import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard.service';

const routes: Routes = [
 //  {path: '',loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
 //  {path: 'login',loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
 //  {path: 'dashboard',loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard]}
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent, canActivate:[AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
