import { lazy,Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";
import Login from "../Auth/Login/Login";
import Home from "../Home/Home";
// import {AuthProvider} from "../AuthProvider";
const LazyDashboardPage= lazy(()=>import('../Home/Dashboard')) ;
const LazyAdminPage= lazy(()=>import('../Home/AdminPage')) ;
//import Adminpage from "../Home/AdminPage";
import ProtectedRoute from '../Auth/ProtectedRoute';
import { LazyLoadingSpinner } from "../Home/LazySpinner/LazyLoadingSpinner";

function Routing(){






    return (
        <>
       
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
           
             <Route path='/signup' element={<Signup/>}/>
           
              <Route path='/login' element={<Login/>}/>
                
                <Route  element={
                    // <AuthProvider>
                    <ProtectedRoute/>
                // </AuthProvider>
                }>
                   <Route path="/dashboard"  element={<Suspense fallback={<LazyLoadingSpinner/>}>
                    <LazyDashboardPage/>
                    </Suspense>}/>
                 
                 <Route path="/admin"  element={<Suspense fallback={<LazyLoadingSpinner/>}>
                                                      <LazyAdminPage/>
                                                 </Suspense>}/>
            </Route>

        </Routes>
        </BrowserRouter>
      
        </>
    )
}

export default Routing;