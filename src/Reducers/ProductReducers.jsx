

const initialState={

    items:[],
    
     
    

};
console.log("intital state",initialState);
//console.log("i add item kumar kumar",state);


function ProductReducer(state=initialState,action){
console.log("intital state.....inside state",state);
console.log(" inside producr reducer........",action);
console.log(" inside producr reducer  type........",action.type);
switch(action.type){
    case 'ADD_TO_ITEM':
     return {
    ...state,

                items:[

                    ...state.items,

                    action.payload

                ]
}


case 'ALL_ITEMS_IN_PRODUCT':
    return  {
        ...state,
        items: action.payload 
      };



case 'DELETE_FROM_ITEM':
      const updatedItems = state.items.filter(
        product => product._id !== action.payload._id
    );

    console.log("Before:", state.items.length);
    console.log("After :", updatedItems.length);

    return {
        ...state,
        items: updatedItems
    };



case 'UPDATE_ITEM_IN_PRODUCT': {

    console.log("Old Items:", state.items);

    const updatedItems = state.items.map(product => {

        if (product._id === action.payload._id) {
            console.log("Updating Product:", product._id);
            return action.payload;
        }

        return product;
    });

    console.log("New Items:", updatedItems);

    return {
        ...state,
        items: updatedItems
    };

}
    default:
        return state;

}

// console.log("i add item kumar kumar",state);
console.log("item madhan kumar kumar",initialState);

}

export default ProductReducer;