import { Children, useState } from "react";
import AuthorContext from "./AuthContext";

export function AuthProvider({children}){

const [userDetailsAndToken,setuserDetailsAndToken]=useState({token:null,role:null});

console.log("token inside",userDetailsAndToken);

return (
<AuthorContext.Provider value={{userDetailsAndToken,setuserDetailsAndToken}}>
{children}
</AuthorContext.Provider>
)
}

// export default AuthProvider;