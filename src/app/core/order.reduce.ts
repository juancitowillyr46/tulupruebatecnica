import { createReducer, on } from '@ngrx/store';
import { GetKeyOrder, SaveKeyOrder } from './order.actions';

const initialState: string = "";

export const orderReducer = createReducer(initialState,
    on(SaveKeyOrder, (state) => state),
    on(GetKeyOrder, (state) => state),
);