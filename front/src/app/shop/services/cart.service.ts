import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Product } from "src/app/model/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(route: ActivatedRoute) {
    this.calcTotalQuantity(this.getList());
  }

  get cart(): Product[] {
    return this.getList();
  }

  private quantityItemsCart = new BehaviorSubject<number>(0);
  public itemsCart = this.quantityItemsCart.asObservable();

  addQuantity(product: Product) {
    let index = this.findItemList(product.id);
    if (index >= 0) {
      // already in the cart
      let list = this.getList();
      if (!product.quantity) { console.error("Quantity not defined"); return; };
      list[index].quantity += product.quantity;
      this.setList(list);
    } else {
      // new element in the cart
      this.setList([...this.getList(), {
        id: product.id,
        name: product.name,
        unit_price: product.unit_price,
        images: [this.getMinimizedImage(product.images)],
        quantity: 1,
      }]);
    }
  }

  removeItemQuantity(product: Product) {
    let index = this.findItemList(product.id);
    if (index == -1) return;
    // remove quantity
    if (this.getList()[index].quantity == 1) { this.removeItem(product.id); return; }
    let list = this.getList();
    list[index].quantity--;
    this.setList(list);
  }

  removeItem(id: string) {
    this.setList(this.getList().filter((x) => x.id != id));
  }

  clean() {
    this.setList([]);
  }

  private getMinimizedImage(images: string[]) {
    if (!images) { console.warn("add resource image undefined"); return 'image undefined' }
    console.warn("TODO: minimize image to show in the cart");
    return images[0];
  };

  private findItemList(id: string) {
    return this.getList().length > 0 ? this.getList().findIndex((x) => x.id == id) : -1;
  }
  private getList(): Product[] {
    let cart = window.localStorage.getItem("cartList");
    if (!cart) return;
    let res = JSON.parse(cart);
    return res ? res : [];

  }
  private setList(list: Product[]) {
    this.calcTotalQuantity(list);
    window.localStorage.setItem("cartList", JSON.stringify(list));
  }

  private calcTotalQuantity(list: Product[]) {
    this.quantityItemsCart.next(list.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity || 0), 0));
  }
}
