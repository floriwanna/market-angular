import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location,
    private fb: FormBuilder,
    private cartService: CartService) {
    this.product.id = this.route.snapshot.paramMap.get('id');
  };



  productForm = this.fb.group({
    quantity: ["", Validators.min(1)],
  });

  public product = new Product();
  ngOnInit(): void {
    this.productService.getProduct(this.product.id).then(x => this.product = x);
  }

  public backPage() {
    this.location.back();
  }

  public addToCart() {
    if (this.productForm.valid) {
      this.product.quantity = Number.parseInt(this.productForm.value.quantity);
      this.cartService.addQuantity(this.product);
    }
  }
}
