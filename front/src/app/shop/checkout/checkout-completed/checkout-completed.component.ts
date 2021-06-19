import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'checkout-completed',
  templateUrl: './checkout-completed.component.html',
  styleUrls: ['./checkout-completed.component.scss']
})
export class CheckoutCompletedComponent implements OnInit {

  constructor(private router: ActivatedRoute, private cartService: CartService, private http: HttpClient) { }

  ngOnInit() {
    if (this.router.snapshot.url.length > 1) {
      if (this.router.snapshot.url[1].path == 'success') {
        this.cartService.clean();
      }
    }
  }
}
