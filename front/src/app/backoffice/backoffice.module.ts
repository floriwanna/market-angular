import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { RouterModule, Routes } from '@angular/router';
import { OfficeHomeComponent } from './office-home/office-home.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarMenuService } from './sidebar-menu/sidebar-menu.service';
import { CustomerUserComponent } from './customer-user/customer-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: OfficeHomeComponent
  },
  {
    path: 'user',
    pathMatch: "full",
    component: CustomerUserComponent
  },
  {
    path: 'product', 
    loadChildren:() => import('./product/product.routing').then(m => m.ProductRouting),
    // pathMatch: "full", component: ProductComponent
    // , children: [
    //   { path: 'add', pathMatch: "full", component: ProductDetailComponent },
    //   { path: 'detail/{id}', pathMatch: "full", component: ProductDetailComponent }
    // ]
  },
];

@NgModule({
  declarations: [BackofficeComponent,
    SidebarMenuComponent,
    CustomerUserComponent,
    ProductComponent,
    ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ], providers: [SidebarMenuService]
})

export class BackofficeModule { }
