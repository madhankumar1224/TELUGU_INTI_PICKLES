
import axios from "axios";
import React, { useCallback } from "react";


const useCart=(url,config)=>{
    let pickle;

    const addToCartApi= useCallback(async(pickleProduct)=>{

         pickle=pickleProduct;
        console.log("pickleProduct inside cart use",pickleProduct);

        try{
            const response =await axios.post(url,pickleProduct,config);
            console.log("response",response);
            
        }catch(error){
            console.log("error inside cart:",error);
        }

    },[url,config,pickle]);
    return {
        addToCartApi
    }

}
export default useCart;