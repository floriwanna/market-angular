import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  private content = new BehaviorSubject<boolean>(false);
  public toggleObservable = this.content.asObservable();

  constructor(private http: HttpClient) {
  }


  private visible = false;
  public toggle() {
    this.visible = !this.visible;
    this.content.next(this.visible);
  }

  public getMenuItems(): Promise<SidebarMenuItem[]> {
    return new Promise((resolve, reject) => {
      this.http.get('/menu')
      resolve([{ title: 'usuarios', url: '/user' }, { title: 'products', url: '/product' }]);
    })
  }
}

export class SidebarMenuItem {
  public title: string;
  public url: string;
}