import { createReducer, on } from '@ngrx/store';
import { Cart } from './cart.interfaces';
import { Add, Remove, Update } from './cart.actions';

const initialState: Array<Cart> = [];

export const cartReducer = createReducer(initialState,
  on(Add, (state, action) => ([...state, { id: action.id, product_id: action.product_id, quantity: action.quantity, price: action.price }])),
  on(Remove, (state, action) => state.filter(i => i.id !== action.id)),
  on(Update, (state, action) => state.map(i => i.id === action.id ? {...i, cart: !i.id} : i)),
)