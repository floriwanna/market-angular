import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/model/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(route: ActivatedRoute) { }

  get cart(): Product[] {
    return this.getList();
  }

  addQuantity(product: Product) {
    let index = this.findItemList(product.id);
    if (index >= 0) {
      // already in the cart
      let list = this.getList();
      list[index].quantity++;
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

  private getMinimizedImage(images: string[]) {
    if (!images) { console.warn("add resource image undefined"); return 'image undefined' }
    console.warn("TODO: minimize image to show in the cart");
    return images[0];
  };
  removeItem(id: string) {
    this.setList(this.getList().filter((x) => x.id != id));
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

  clean() {
    this.setList([]);
  }

  private findItemList(id: string) {
    return this.getList().length > 0 ? this.getList().findIndex((x) => x.id == id) : -1;
  }
  private getList(): Product[] {
    try {
      let res = JSON.parse(window.localStorage.getItem("cartList"));
      return res ? res : [];
    } catch {
      return [];
    }
  }
  private setList(list: Product[]) {
    window.localStorage.setItem("cartList", JSON.stringify(list));
  }
}
