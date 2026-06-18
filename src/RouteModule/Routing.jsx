import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";
import Login from "../Auth/Login/Login";
import Home from "../Home/Home";

function Routing(){

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>

        </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default Routing;