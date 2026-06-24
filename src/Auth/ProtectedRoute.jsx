
import { Navigate,Outlet } from "react-router-dom";
import AuthorContext from "../AuthContext";
import { useContext } from "react";
function ProtectedRoute({children}){
       const { userDetailsAndToken } = useContext(AuthorContext);
       console.log("children of protectedRoute",children);
      console.log("token of protected route",userDetailsAndToken.token);
      console.log("role of protectedRoute",userDetailsAndToken.role);
    
    

         return userDetailsAndToken.token  ? <Outlet /> : <Navigate to="/login" />;




}


export default ProtectedRoute;