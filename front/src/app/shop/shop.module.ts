import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ShopRoutes } from './shop.routing';

@NgModule({
  declarations: [ShopComponent, HomeComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(ShopRoutes)
  ]
})

export class ShopModule { }
