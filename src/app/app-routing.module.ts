import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    loadChildren: './modules/product/product.module#ProductModule',
  },
  {
    path: '**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
