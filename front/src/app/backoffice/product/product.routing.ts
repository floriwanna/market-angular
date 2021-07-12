import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ProductComponent } from './product.component';


const routes: Routes = [
  { path: '', pathMatch: "full", component: ProductComponent },
  { path: 'add', pathMatch: "full", component: ProductDetailComponent },
  { path: 'detail/{id}', pathMatch: "full", component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }