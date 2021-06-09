import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable()
export class ProductsService {

  constructor() { }


  private products = [
    { id: '1', title: 'p1', price: 3 } as Product,
    { id: '2', title: 'p2', price: 1 } as Product,
    { id: '3', title: 'p3', price: 1 } as Product,
  ];

  public getHomeTopProducts() {

    return new Promise((res, rej) => {
      res(this.products);
    })
  }

  public getProduct(id): Promise<Product> {
    return new Promise((res, rej) => {
      res(this.products.find(x => x.id == id));
    })
  }

  private categories = [
    {
      id: '1',
      name: 'Cat1',
      subCaterories: [{ id: '2', name: 'Sub cat 1.1' }, { id: '3', name: 'Sub cat 1.2' }, { id: '4', name: 'Sub cat 1.3' }]
    } as Category];
  public getCategories() {
    return new Promise((res, rej) => {
      res(this.categories)
    });
  }

}
