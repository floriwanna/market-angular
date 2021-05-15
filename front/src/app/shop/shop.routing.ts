import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

export const ShopRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detalle', component: ItemDetailComponent }
];
