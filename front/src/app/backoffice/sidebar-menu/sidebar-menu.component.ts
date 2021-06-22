import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SidebarMenuService, SidebarMenuItem } from './sidebar-menu.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements AfterViewInit, OnInit {

  constructor(private sidebarMenuService: SidebarMenuService, private cd: ChangeDetectorRef, private router: Router) {
  }

  public barVisibility = true;
  public menuElements: Array<SidebarMenuItem>;

  @ViewChild('drawer') drawer: MatDrawer;

  ngOnInit(): void {
    this.sidebarMenuService.getMenuItems().then(res => {
      this.menuElements = res;
      this.menuElements.unshift({ title: 'home', url: '' })
    });
  }

  ngAfterViewInit(): void {
    this.sidebarMenuService.toggleObservable.subscribe(x => {
      if (x)
        this.drawer.open();
      else
        this.drawer.close();
    });
    this.cd.detectChanges();
  }


  redirect(pagename: string) {
    this.router.navigate(['/admin/' + pagename]);
  }
}
