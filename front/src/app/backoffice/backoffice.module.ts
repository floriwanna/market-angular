import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { OfficeHomeComponent } from './office-home/office-home.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';


const routes: Routes = [
  { path: '', pathMatch: "full", component: OfficeHomeComponent },
];

@NgModule({
  declarations: [BackofficeComponent,
    SidebarMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule
  ]
})
export class BackofficeModule { }
