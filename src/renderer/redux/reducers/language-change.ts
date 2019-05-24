// A reducer for handling interface language changes

import {LANGUAGE_CHANGE} from '../action-types';

const initialState = {lng: "en"};

const languageChange = (state = initialState, action:any) => {
    switch (action.type) {
        case LANGUAGE_CHANGE: {
            return {
                ...state,
                lng: action.payload.lng
            }
        }
        default: {
            return state;
        }
    }
};

export default languageChange;
