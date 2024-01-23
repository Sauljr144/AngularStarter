import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {path: 'sign-up', loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule)},
   { path: '', redirectTo: 'products', pathMatch: 'full' }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
