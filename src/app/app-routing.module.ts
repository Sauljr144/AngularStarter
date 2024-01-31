import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductDetailGuard } from './product/product-detail.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./public/public-routing.module').then(
        (m) => m.PublicRoutingModule
      ),
  },
  { path: 'product/:id',canActivate:[ProductDetailGuard], component: ProductDetailComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
