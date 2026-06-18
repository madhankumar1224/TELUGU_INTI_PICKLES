import { Link } from "react-router-dom";


function Login(){

    return (
        <>
        <h1>Login page</h1>
        <Link to="/Signup" >Signup</Link>
         <Link to="/" >home</Link>
        </>
    )
}

export default Login;