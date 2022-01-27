import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cart } from './cart.model';
import { ProductsCart } from './product-cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db: AngularFireDatabase) { }

  public registerCart(payload: Cart): Promise<any> {
    const ref = this.db.list('carts');
    return ref.push(payload).get();
  }

  public registerProductCart(payload: ProductsCart[]): Promise<any> {
    const ref = this.db.list('products_carts');
    return ref.push(payload).get();
  }

}
