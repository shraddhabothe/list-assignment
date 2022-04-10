import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

// containers
import { DashboardComponent } from './dashboard.component';

// routes
export const ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [    
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}