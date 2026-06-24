import axios from "axios";
import { useCallback, useEffect, useState } from "react";


export function useCheck(url,config){

    console.log("url,",url);
        console.log("configgggg,",config);
            console.log("url,",url);

const [data,setData]=useState('');
const [loginDetailsError,setLoginDetailsError]=useState({
    isError:false,
    errorMessage:''
});

const executeFunction=useCallback(async(bodyData)=>{
       console.log(" bodyataatatat,",bodyData);

        console.log("url222222,",url);
        console.log("configgggg11111,",config);
            console.log("url333333,",url);

try{
    const response= await axios.post(url,bodyData,config);
   console.log("use check inside responbse",response);
    console.log("response data", response.data);
    
    if(response.data){
        setData(response.data);
        setLoginDetailsError((prev)=>({...prev,isError:false}))
    }
    console.log("data insdie usechec",data);

}catch(error){
    if(error.response){
        console.log("use check error inside",error.response.data);

setLoginDetailsError((prev)=>({...prev,isError:true,errorMessage:error.response.data}))
    }else{
         console.error("An unexpected error occurred:", error.message);
    }
}

},[url,config]);

     return { executeFunction, data,loginDetailsError };
}