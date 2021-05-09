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


const routes: Routes = [
  { path: '', pathMatch: "full", component: OfficeHomeComponent },
  { path: 'user', pathMatch: "full", component: CustomerUserComponent },
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
    MatIconModule
  ], providers: [SidebarMenuService]
})
export class BackofficeModule { }
