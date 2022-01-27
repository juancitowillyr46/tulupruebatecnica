import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/cart.interfaces';
import { Product } from 'src/app/core/product.model';
import { ProductService } from 'src/app/core/product.service';
import { Add, Remove, Update } from '../../core/cart.actions';
import * as uuid from 'uuid';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public visible: boolean;
  public productList: Product[] = [];

  cart$: Observable<Cart[]>;
  cartCountProducts: number;

  public cartId: string = null;

  constructor(
    private nzMessageService: NzMessageService, 
    private productService: ProductService,
    private store: Store<{ cartState: Array<Cart> }>
  ) {
    const that = this;
    that.cart$ = store.select(state => state.cartState);
    that.cart$.subscribe( res => {
      that.cartCountProducts = res.length;
    });
  }
  

  ngOnInit(): void {
    const that = this;
    that.productService.getListProducts().snapshotChanges().subscribe(res => {
      that.productList = [];
      return res.map(res => {
        const productKey = res.key;
        const productToJson = res.payload.toJSON();
        that.productList.push({
          key: productKey,
          id: productToJson['id'],
          name: productToJson['name'],
          sku: productToJson['sku'],
          description: productToJson['description'],
          image: productToJson['image'],
          price: productToJson['price']
        });
      });
    });
  }

  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);
  
  reGenerateArray(count: number): void {
    this.array = new Array(count);
  }

  addCart(product: Product): void {
    const that = this;
    that.visible = true;
    this.store.dispatch(Add({ 
      id: uuid.v4(),
      product_id: product.key,
      price: product.price,
      quantity: 1
    }));
  }

  // Modal carrito
  openCart(): void {
    const that = this;
    that.visible = true;
  }

  closeCart(): void {
    const that = this;
    that.visible = false;
  }

  // Confirmacion de Pago
  payConfirm(): void {
    const that = this;
    that.nzMessageService.info('click confirm');
  }

  payCancel(): void {
    const that = this;
    that.nzMessageService.info('click cancel');
  }

  // Eliminacion de Items
  deleteItemCart(): void {
    const that = this;
    that.nzMessageService.info('Producto eliminado');
  }

}
