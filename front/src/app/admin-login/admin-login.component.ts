import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  //data: { username: string, password: string };
  data = { username: '', password: '' };
  ngOnInit(): void {
  }

  tryLogin() { }
}
