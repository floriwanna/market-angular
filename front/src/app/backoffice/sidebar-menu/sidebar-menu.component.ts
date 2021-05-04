import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  public menuElements = [{ title: 'productos', url: '/products' }, { title: 'categorias', url: '/categories' }, { title: 'usuarios', url: '/users' }];

  ngOnInit(): void {
  }

}
