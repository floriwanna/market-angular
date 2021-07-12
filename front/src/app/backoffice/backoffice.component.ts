import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarMenuService } from './sidebar-menu/sidebar-menu.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(private sidebarMenuService: SidebarMenuService) { }

  ngOnInit(): void {
  }

  public toggleMenuBar() {
    this.sidebarMenuService.toggle();
  }
}
