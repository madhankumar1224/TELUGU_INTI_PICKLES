

import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
const RootReducer=combineReducers({
    addProductToState:ProductReducer
})


export default RootReducer;