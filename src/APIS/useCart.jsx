
import axios from "axios";
import React, { useCallback } from "react";


const useCart=(config)=>{
    let pickle;

    const addToCartApi= useCallback(async(url,pickleProduct)=>{

         pickle=pickleProduct;
        console.log("pickleProduct inside cart use",pickleProduct);

        try{
            const response =await axios.post(url,pickleProduct,config);
            console.log("response",response);
                return response; 
        }catch(error){
            console.log("error inside cart:",error);
               return error.response || { data: { message: "Error" } };
        }

    },[config,pickle]);




const cartListAPI= useCallback(async(url)=>{

    try{
    const response=await axios.get(url,config);
    return response.data;
    }catch(error){
        return  error.response || { data: { message: "Error" } };
    }
},[config]);


const deleteFromCartAPI=useCallback(async(url,productId)=>{

    try{
              const response = await axios.delete(url, {
                ...config,
                data: { productId } 
            })
  return response.data;
    }catch(error){
        return error.response || { data: { message: "Error" } };
    }


},[config]);

    return {
        addToCartApi,cartListAPI,deleteFromCartAPI
    }

}
export default useCart;