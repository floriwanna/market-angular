import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CheckoutService } from "../services/checkout.service";
import { CartService } from "../services/cart.service";

@Component({
  selector: "checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  checkoutForm = this.fb.group({
    name: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    deliveryType: ["delivery"],
    streetName: [""],
    streetNumber: [""],
    postalCode: [""],
    city: [""],
    country: [""],
    paymentMethod: [""]
  });

  delivery_type_radio: string;
  constructor(
    private fb: FormBuilder,
    private checkoutService: CheckoutService,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.cartService.cart);
    this.checkoutService.getPaymentUrl(this.checkoutForm.value, this.cartService.cart).then(x => {
      window.location.href = x;
    });
  }

}