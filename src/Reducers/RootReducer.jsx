

import { combineReducers } from "redux";
import ProductReducer from "./productReducers";
const RootReducer=combineReducers({
    addProductToState:ProductReducer
})


export default RootReducer;