import { Injectable, ɵConsole } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/model/product";

@Injectable({
  providedIn: "root",
})
export class CheckoutService {

  constructor(private http: HttpClient) {
  }


  getPaymentUrl(user: any, cart: Product[]) {

    let req = {
      user,
      cart
    };
    console.error('TODO - revisar si es un usuario registrado o no')
    // Si es usuario registrado es endpoint con informacion de direccion de envio.
    return this.http.post<any>(
      '/api/checkout',
      req
    ).toPromise();
  }
}
