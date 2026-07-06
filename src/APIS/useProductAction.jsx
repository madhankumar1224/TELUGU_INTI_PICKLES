import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
export const useProductAction=(url,config)=>{

//1const [newProductData,setnewProductData]=useState('');



const addExecutePicklefunction=useCallback(async(newPickleProduct)=>{
try{
const response =await axios.post(url,newPickleProduct,config);
console.log("response in useProduct hook",response);
console.log("response in useProduct hook data",response.data);
console.log("response in useProduct hook product",response.data.product);
    //2setnewProductData(respones.data.product);

 return response.data;
   //  return response.data.product;

}catch(error){
console.log("error of hook ......",error);


    console.log("error",error);

    console.log("error.response)",error.response);

    console.log("error.response?.data",error.response?.data);

    console.log("error.response?.data?.message",error.response?.data?.message);

    toast.error(

        error.response?.data?.message ||

        error.message ||

        "Something went wrong",{
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

}

    );

// }
}


},[url,config]);

const allPicklesFunction=useCallback(async(url1,config1)=>{
const response=await axios.get(url1,config1);
console.log("respobe",response);
console.log("allProducts", response);
console.log("isArray", Array.isArray(response.data));
return response.data;
},[]);




const deleteProductPickleFunction =useCallback(async (url2,config2)=>{

    const response=await axios.delete(url2,config2);
    console.log("delte response",response);
   // return response;
    return response.data;
},[]);




const updatePickleFunction=useCallback(async(url3,data,config3)=>{
console.log("inside update pickle function",data);
    const response=await axios.put(url3,data,config3);
    console.log(response);
   // return response;
     return response.data;

},[])


    return {addExecutePicklefunction,
        // newProductData,
        allPicklesFunction,deleteProductPickleFunction,updatePickleFunction}

}

