import { useEffect, useState } from "react";
import axios from "axios";

function UserFetch(url,userDetails){

  const [error,setError]=useState(null)
    const [data,setData]=useState(null);
  const [loading, setLoading] = useState(true);
    useEffec(()=>{

        async function userSignupDetails(){    

     let postedData= await axios.post(url,userDetails);
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
 },[url]);

    return [data]
}

export default UserFetch;
