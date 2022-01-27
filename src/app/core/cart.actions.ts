import {createAction, props} from '@ngrx/store';
import { Cart } from './cart.interfaces';

export const Add = createAction('[Cart Component] Add', props<Cart>());
export const Remove = createAction('[Cart Component] Remove', props<{id: string}>());
export const Update = createAction('[Cart Component] Update', props<{id: string}>());
export const Syncronization = createAction('[Cart Component] Syncronization', props<{exit: boolean}>());
