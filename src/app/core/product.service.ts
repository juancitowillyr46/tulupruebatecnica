import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<Product>; 

  constructor(private db: AngularFireDatabase) { }

  getListProducts(): AngularFireList<Product> {
    this.products = this.db.list('/products');
    return this.products;
  }
}
