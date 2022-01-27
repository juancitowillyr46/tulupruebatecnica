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

  constructor(private store: Store<{ cartState: Array<Cart> }>) { 
    const that = this;
    that.cart$ = store.select(state => state.cartState);
  }

  ngOnInit(): void {

  }
}
