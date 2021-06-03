import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const routes: Routes = [
  {
    path: '', component: ShopComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'detalle', component: ItemDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [ShopComponent, HomeComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})

export class ShopModule { }
