
import { ADD_TO_ITEM } from "./ProductActions";
function ProductAddActions(product){
  console.log("inside actions in product aadd -useeffect  2",product);
    return {
type:'ADD_TO_ITEM',
payload:product
    }

}

export default ProductAddActions;