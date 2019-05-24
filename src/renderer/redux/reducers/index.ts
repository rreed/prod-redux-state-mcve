// the meta-reducer. All other reducers should go into this directory and be imported and combined here.
import { combineReducers } from "redux";
import languageChange from './language-change';

export default combineReducers({
    languageChange
});
