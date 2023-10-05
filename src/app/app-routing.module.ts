import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./login-component/login-component.component').then(mod => mod.LoginComponentComponent)},
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent),
    canActivate: [IsLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
