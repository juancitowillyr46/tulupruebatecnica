import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/cart.interfaces';
import { Product } from 'src/app/core/product.model';
import { ProductService } from 'src/app/core/product.service';
import { Add, Remove  } from '../../core/cart.actions';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/cart.service';
import { environment } from 'src/environments/environment';
import { ProductsCart } from 'src/app/core/product-cart.model';
import { SaveKeyOrder } from 'src/app/core/order.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  visible: boolean;
  productList: Product[] = [];

  cart$: Observable<Cart[]>;
  cartCountProducts: number;
  
  cloneStateCart: Cart[] = null;
  cartTotal: number = 0.00;

  order$: Observable<string>;

  constructor(
    private nzMessageService: NzMessageService, 
    private productService: ProductService,
    private store: Store<{ cartState: Array<Cart> }>,
    private storeOrder: Store<{ orderState: "" }>,
    private router: Router,
    private cartService: CartService
  ) {
    
    const that = this;
    that.cart$ = store.select(state => state.cartState);
    that.cart$.subscribe( res => {
      that.cloneStateCart = JSON.parse(JSON.stringify(res));
      that.cartCountProducts = res.length;
      that.sumTotal(that.cloneStateCart);
    });

    that.order$ = storeOrder.select(state => state.orderState);
    
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

  // Acciones del Carrito
  addCart(product: Product): void {
    const that = this;
    that.visible = true;
    
    this.store.dispatch(Add({ 
      id: uuid.v4(),
      product_image: product.image,
      product_name: product.name,
      product_id: product.key,
      price: product.price,
      quantity: 1
    }));
  }

  // Eliminacion de Items
  deleteItemCart(id: string): void {
    const that = this;
    that.nzMessageService.info('Producto eliminado correctamente');
    this.store.dispatch(Remove({ 
      id: id
    }));
    that.cart$.subscribe( res => {
      if(res.length == 0) {
        that.cartTotal = 0;
      }
    })
  }

  // Sumatoria de subtotales
  sumTotal(cloneStateCart: Cart[]): void {
    const that = this;
    if(cloneStateCart.length > 0) {
      that.cartTotal = 0;
      cloneStateCart.forEach(item => {
        that.cartTotal =  that.cartTotal + (item.price * item.quantity);
      });
    }
  }
  
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
    const uuidCart = uuid.v4();

    // Registro Carrito
    that.cartService.registerCart({
      id: uuidCart,
      status: environment.cartStates[0]
    }).then((response) => {

      that.storeOrder.dispatch(SaveKeyOrder({
        key: response['key']
      }));

      console.log(response['key']);
      // Registro tabla intedermedia
      let itemStore: ProductsCart[] = [];
      that.cart$.subscribe(items => {
        items.forEach(item => {
          itemStore.push({
            cart_id: uuidCart,
            product_id: item.product_id,
            quantity: item.quantity
          })
        });
        that.registerRelationProductsAndCart(itemStore);
      });

    }).catch((error) => {
      that.nzMessageService.info('Hubo un problema al realizar su transacción');
    });
  }

  private registerRelationProductsAndCart(payload: ProductsCart[]) {
    const that = this;
    that.cartService.registerProductCart(payload).then((response) => {
      console.log(response['key']);
      that.nzMessageService.info('Pago realizado correctamente');
      that.router.navigate(['/order']);
    }).catch((error) => {
      that.nzMessageService.info('Hubo un problema al realizar su transacción');
    });
  }

  payCancel(): void {
    //const that = this;
  }

}
