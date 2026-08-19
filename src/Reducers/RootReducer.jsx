

import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
import UserProductsReducer from "./UserProductsReducer";
import CartReducer from './CartReducer';
const RootReducer=combineReducers({
    addProductToState:ProductReducer,
    userProductsListToState:UserProductsReducer,
    cartListofUser:CartReducer
})


export default RootReducer;