
export const ALL_PRODUCTS_LIST='ALL_PRODUCTS_LIST';

 function allProductsList(products){
    
return {
   type:'ALL_PRODUCTS_LIST',
   payload:products
    }

}

export {allProductsList};