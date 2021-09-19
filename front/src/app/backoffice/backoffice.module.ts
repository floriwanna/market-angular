import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
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
  // {
  //   path: 'product',
  //   loadChildren: () => import('./product/product.routing').then(m => m.ProductRouting),
  // },
  {
    path: "product",
    component: ProductComponent,
    children: [
      {
        path: "",
        // resolve: {
        //   currentPermissions: CurrentPermissionResolve,
        // },
        loadChildren: () =>
          import("./product/product-back.module").then((x) => x.ProductBackModule),
      },
    ],
    // canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [BackofficeComponent,
    SidebarMenuComponent,
    CustomerUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ], providers: [SidebarMenuService]
})

export class BackofficeModule { }
