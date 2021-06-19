import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShopRoutes } from './shop.routing';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from './services/products.service';
import { DesignService } from './services/design.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { CheckoutService } from './services/checkout.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ShopComponent, HomeComponent, ProductDetailComponent, CartComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    RouterModule.forChild(ShopRoutes)
  ],
  providers: [ProductsService, DesignService, CartService, CheckoutService]
})

export class ShopModule { }
