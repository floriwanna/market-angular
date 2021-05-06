import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidebarMenuService } from './sidebar-menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements AfterViewInit {

  constructor(private sidebarMenuService: SidebarMenuService, private cd: ChangeDetectorRef) {
  }

  public menuElements = [{ title: 'productos', url: '/products' }, { title: 'categorias', url: '/categories' }, { title: 'usuarios', url: '/users' }];
  public barVisibility = true;

  @ViewChild('drawer') drawer: MatDrawer;

  ngAfterViewInit(): void {
    this.sidebarMenuService.toggleObservable.subscribe(x => {
      if (x)
        this.drawer.open();
      else
        this.drawer.close();
    });
    this.cd.detectChanges();
  }
}
