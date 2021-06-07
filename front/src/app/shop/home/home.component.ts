import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  products = [
    { id: 1, title: 'p1', price: 3, color: 'lightblue' },
    { id: 2, title: 'p2', price: 1, color: 'lightgreen' },
    { id: 3, title: 'p3', price: 1, color: 'lightpink' },
  ];

  public showProduct(id) {
    this.router.navigate(['/product/' + id]);

  }
}
