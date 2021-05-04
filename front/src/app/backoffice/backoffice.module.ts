import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { OfficeHomeComponent } from './office-home/office-home.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  { path: '', pathMatch: "full", component: OfficeHomeComponent },
];

@NgModule({
  declarations: [BackofficeComponent,
    SidebarMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class BackofficeModule { }
