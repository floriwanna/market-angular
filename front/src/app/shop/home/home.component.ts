import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products;

  constructor(private router: Router
    , private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getHomeTopProducts().then(res => { this.products = res });
  }


  public showProduct(id) {
    this.router.navigate(['/product/' + id]);
  }
}
