import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: HomeComponent, outlet: 'home' },
  { path: 'login', pathMatch: "full", component: HomeComponent, outlet: 'shop' }

];

@NgModule({
  declarations: [ShopComponent, HomeComponent, NavBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})

export class ShopModule { }
