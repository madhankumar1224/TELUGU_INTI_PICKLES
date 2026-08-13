

const initialUserProducts={
    products:[]
};
function UserProductsReducer(state=initialUserProducts,action){
console.log("state:::",state);
console.log("action::",action);
switch(action.type){
    case 'ALL_PRODUCTS_LIST':
        return {
             ...state,products:action.payload
        }

          default:
        return state;


}
console.log("state2222:::",state);
console.log("action::2222",action);
console.log("initialUserProducts:::",initialUserProducts);
}


export default UserProductsReducer;