import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { CartService } from "../services/cart.service";
import { CheckoutService } from "../services/checkout.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private checkoutService: CheckoutService) { }

  cartItems = this.cartService.cart;
  public items = [];
  public cartColumns = [];
  public cartColumnsDisplay = ['', 'name'];

  ngOnInit() {
    console.log(this.cartItems)
  }

  removeItem(item: Product) {
    this.cartService.removeItem(item.id);
  }

  addQuantity(item: Product) {
    this.cartService.addQuantity(item);
    this.cartItems = this.cartService.cart;
  }

  removeQuantity(item: Product) {
    this.cartService.removeItemQuantity(item);
    this.cartItems = this.cartService.cart;
  }
}
