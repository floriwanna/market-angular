import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  private content = new BehaviorSubject<boolean>(false);
  public toggleObservable = this.content.asObservable();

  constructor() {
  }


  private visible = false;
  public toggle() {
    this.visible = !this.visible;
    this.content.next(this.visible);
  }

}