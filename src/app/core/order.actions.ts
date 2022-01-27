import {createAction, props} from '@ngrx/store';

export const GetKeyOrder = createAction('[Order Component] Get Key');
export const SaveKeyOrder = createAction('[Order Component] SaveKeyCart', props<{key: string}>());