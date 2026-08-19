
import axios from "axios";
import React, { useCallback } from "react";


const useCart=(config)=>{
    

  
        const url='https://backend-telugu-inti-pachalu.onrender.com';
    const addToCartApi= useCallback(async(pickleProduct)=>{

    
        console.log("pickleProduct inside cart use",pickleProduct);

        try{
            const response =await axios.post(`${url}/cart/addtocart`,pickleProduct,config);
            console.log("response",response);
                return response; 
        }catch(error){
            console.log("error inside cart:",error);
               return error.response || { data: { message: "Error" } };
        }

    },[config]);




const cartListAPI= useCallback(async()=>{
 //url='https://backend-telugu-inti-pachalu.onrender.com/cart/allCartListPickles';
    try{
    const response=await axios.get(`${url}/cart/allCartListPickles`,config);
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