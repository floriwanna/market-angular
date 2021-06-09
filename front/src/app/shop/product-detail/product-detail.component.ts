import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private location: Location) {
    this.product.id = this.route.snapshot.paramMap.get('id');
  };



  public product = new Product();
  ngOnInit(): void {

    this.productService.getProduct(this.product.id).then(x => this.product = x);
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = Number(params.get('id'));
    //     // return this.service.getHeroes();
    //   })
    // );
  }

  public backPage() {
    this.location.back();
  }
}
