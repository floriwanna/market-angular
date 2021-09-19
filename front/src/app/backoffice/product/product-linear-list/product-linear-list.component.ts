import { Component, OnInit } from "@angular/core";
import { ProductBackService } from "../product-back.service";

@Component({
  selector: "product-linear-list",
  templateUrl: "./product-linear-list.component.html",
  styleUrls: ["./product-linear-list.component.scss"],
})
export class ProductLinearListComponent implements OnInit {
  public products = [];
  public productsColumns = [];
  public productsColumnsDisplay = [];

  constructor(private productService: ProductBackService) { }

  lenguage = { btn: { detail: 'Detalle', deactivate: 'Desactivar', remove: 'Eliminar' } }
  canEdit = true;
  canDesactivate = true;
  canRemove = false;

  ngOnInit() {
    this.productService.getListProduct().then((response) => {
      this.products = response.map((x, i) => { return { options: '', ...x } });
      if (this.products.length > 0)
        this.productsColumnsDisplay = this.productsColumns = Object.keys(this.products[0]);
      console.log(this.products)
      console.log(this.productsColumnsDisplay)
    });
  }

  edit(element) {
    console.log(element)
  }
  deactivate(element) { }
  remove(element) { }
  checkHiddenColumn(column) {
    return true;
  }





}
