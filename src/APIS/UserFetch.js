import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function userFetch(url,userDetails,config){

  const [error,setError]=useState(null)
    const [data,setData]=useState(null);
  const [loading, setLoading] = useState(true);

  
// const chekingData=useCallback(async(bodyData=null)=>{


// let postedData= await axios.post(url,userDetails,config);
//       postedData.then((res)=>{
//     res.data.json();
//      setData(data);
//    }
    
//     ).catch((error)=>{
//    setError(error);
//         console.log(error);
//     });

// },[url,config])




    useEffect(()=>{

        async function userSignupDetails(){    

     let postedData= await axios.post(url,userDetails,config);
      postedData.then((res)=>{
    res.data.json();
     setData(data);
   }
    
    ).catch((error)=>{
   setError(error);
        console.log(error);
    });
 
userSignupDetails();
    
 }
 },[url,config]);

    return [data]
}

export default userFetch;
