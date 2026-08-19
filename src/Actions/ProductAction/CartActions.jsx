export const ADD_ITEM_CART='ADD_ITEM_CART';
export const NEW_ITEM_TO_CART="NEW_ITEM_TO_CART";
export const EXISTING_ITEM_UPDATE_TO_CART="EXISTING_ITEM_UPDATE_TO_CART";
export const ALL_CART_LIST='ALL_CART_LIST';
export const DELETE_FROM_CART='DELETE_FROM_CART';


export function addToCart(cartProduct){
 console.log("allProductItems....",cartProduct);
    return {
        type:'ADD_ITEM_CART',
        payload:cartProduct
    }
}


export function NewItemAddToCart(cartProduct){
 console.log("allProductItems....",cartProduct);
    return {
        type:'NEW_ITEM_TO_CART',
        payload:cartProduct
    }
}


export function ExistingItemUpdateToCart(cartProduct){
 console.log("allProductItems....",cartProduct);
    return {
        type:'EXISTING_ITEM_UPDATE_TO_CART',
        payload:cartProduct
    }
}


export function AllCartList(cartList){
 console.log("allProductItems....",cartList);
    return {
        type:'ALL_CART_LIST',
        payload:cartList
    }
}


export function DeleteFromCartList(cartList){
 console.log("allProductItems....",cartList);
    return {
        type:'DELETE_FROM_CART',
        payload:cartList
    }
}