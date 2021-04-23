import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginBackofficeServiceService {

  constructor() { }
  getCurrentPermissions(): Promise<string[]> { return Promise.resolve([]); }
}
