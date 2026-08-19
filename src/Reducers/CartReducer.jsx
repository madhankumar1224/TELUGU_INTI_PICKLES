
const initialState={

    cartItems:[],
    
     
    

};
console.log("intital state",initialState);


function ProductReducer(state=initialState,action){
console.log("intital state.....inside state",state);
console.log(" inside producr reducer........",action);
console.log(" inside producr reducer  type........",action.type);
switch(action.type){
    case 'ADD_ITEM_CART':
     return {
    ...state,

                cartItems:action.payload

                
}

    case 'NEW_ITEM_TO_CART':
     return {
    ...state,

                cartItems:action.payload

                
};

  case 'EXISTING_ITEM_UPDATE_TO_CART':
     return {
    ...state,

                cartItems:action.payload

                
};

case 'ALL_CART_LIST':
    return {
        ...state,cartItems:action.payload
    };

    case 'DELETE_FROM_CART':
    return {
        ...state,cartItems:action.payload
    };

   default:
      return state; 
  }



}

export default ProductReducer;