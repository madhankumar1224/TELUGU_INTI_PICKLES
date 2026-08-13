

import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
import UserProductsReducer from "./UserProductsReducer";
const RootReducer=combineReducers({
    addProductToState:ProductReducer,
    userProductsListToState:UserProductsReducer
})


export default RootReducer;