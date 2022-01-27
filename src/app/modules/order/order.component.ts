import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/cart.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  cart$: Observable<Cart[]>;
  order$: Observable<string>;

  constructor(
    private store: Store<{ cartState: Array<Cart> }>,
    private storeOrder: Store<{ orderState: "" }>
  ) { 
    const that = this;
    that.cart$ = that.store.select(state => state.cartState);
    that.order$ = that.storeOrder.select(state => state.orderState);
  }

  ngOnInit(): void {
    const that = this;
    that.order$.subscribe( res => {
      console.log(res);
    });
    //that.storeOrder.dispatch()
  }
}
