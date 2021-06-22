import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
import { CustomerLoginService } from '../customer-login/customer-login.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private loginService: CustomerLoginService, private router: Router, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.itemsCart.subscribe(x => this.cant = x);
  }



  public cant: number;
  showAuthenticate(): Boolean {
    return this.loginService.isAuthenticated(true);
  }

  public toHome() { this.router.navigate(['']) }

}
