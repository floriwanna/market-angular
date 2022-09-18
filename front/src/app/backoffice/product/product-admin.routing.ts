import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductLinearListComponent } from './product-linear-list/product-linear-list.component';

import { ProductComponent } from './product.component';


export const ProductAdminRoutes: Routes = [
  { path: '', pathMatch: "full", component: ProductLinearListComponent },
  { path: 'add', pathMatch: "full", component: ProductDetailComponent },
  { path: 'detail/{id}', pathMatch: "full", component: ProductDetailComponent }
];
