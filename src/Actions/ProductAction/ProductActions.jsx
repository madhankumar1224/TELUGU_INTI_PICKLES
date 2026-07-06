

export const ADD_TO_ITEM='ADD_TO_ITEM';
export const DELETE_FROM_ITEM='DELETE_FROM_ITEM';
export const ALL_ITEMS_IN_PRODUCT='ALL_ITEMS_IN_PRODUCT';
export const UPDATE_ITEM_IN_PRODUCT='UPDATE_ITEM_IN_PRODUCT';


export function addToProduct(product){
 console.log("allProductItems....",product);
    return {
        type:'ADD_TO_ITEM',
        payload:product
    }
}


export function allProductItems(Allproducts){

    console.log("allProductItems....",Allproducts);
    return {
        type:'ALL_ITEMS_IN_PRODUCT',
        payload:Allproducts
    }
}


export function deleteProductItem(deleteProduct){
    console.log("deleteProduct",deleteProduct);
    return {
        type:'DELETE_FROM_ITEM',
        payload:deleteProduct
    }
}


export function updateProductItem(updatedProduct){
    console.log("updated Product",updatedProduct);
    
    return {
        type:'UPDATE_ITEM_IN_PRODUCT',
        payload:updatedProduct
    }

}