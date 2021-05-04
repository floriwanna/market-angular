import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-home',
  templateUrl: './office-home.component.html',
  styleUrls: ['./office-home.component.scss']
})
export class OfficeHomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

}
