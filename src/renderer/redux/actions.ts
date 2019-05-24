import * as ActionTypes from './action-types';

export const languageChange = (newLng:string) => ({
    type: ActionTypes.LANGUAGE_CHANGE,
    payload: {
        lng: newLng
    }
});
