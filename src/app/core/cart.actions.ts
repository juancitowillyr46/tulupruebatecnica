import {createAction, props} from '@ngrx/store';

export const Add = createAction('[Cart Component] Add', props<{id: string, product_id: string, quantity: number, price: number}>());
export const Remove = createAction('[Cart Component] Remove', props<{id: string}>());
export const Update = createAction('[Cart Component] Update', props<{id: string}>());