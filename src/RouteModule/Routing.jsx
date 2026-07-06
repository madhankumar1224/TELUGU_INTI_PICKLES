import { lazy,Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../Auth/Signup/Signup";
import Login from "../Auth/Login/Login";
import Home from "../Home/Home";
// import {AuthProvider} from "../AuthProvider";
const LazyDashboardPage= lazy(()=>import('../Home/Dashboard')) ;
const LazyAdminPage= lazy(()=>import('../Home/Admin/AdminPage')) ;
const LazyAdminOrdersPage=lazy(()=>import('../Home/Orders/OrdersPage'));
 const LazyAdminProductsPage =lazy(()=>import('../Home/Products/ProductsPage'));
 const LazyCustomersPage=lazy(()=>import('../Home/Customers/Customer'));
const LazyAnalyticsPage=lazy(()=>import('../Home/Analaytics/Analaytics'));
const LazySettingsPage=lazy(()=>import('../Home/Settings/Settings'));
const LazyAdminDashboard=lazy(()=>import('../Home/AdminDashboard/AdminDashboard'));
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
                                                 </Suspense>}>


          <Route path="orders" element={
      <Suspense fallback={<LazyLoadingSpinner/>}>
        <LazyAdminOrdersPage /> 
      </Suspense>
    }/>



  <Route path="admindashboard" element={
      <Suspense fallback={<LazyLoadingSpinner/>}>
        <LazyAdminDashboard /> 
      </Suspense>
    }/>




   <Route path="products" element={
      <Suspense fallback={<LazyLoadingSpinner/>}>
        <LazyAdminProductsPage /> 
      </Suspense>
    }/>


  <Route path="customers" element={
      <Suspense fallback={<LazyLoadingSpinner/>}>
        <LazyCustomersPage /> 
      </Suspense>
    }/>

 <Route path="analaytics" element={
      <Suspense fallback={<LazyLoadingSpinner/>}>
        <LazyAnalyticsPage /> 
      </Suspense>
    }/>
 <Route path="settings" element={
      <Suspense fallback={<LazyLoadingSpinner/>}>
        <LazySettingsPage /> 
      </Suspense>
    }/>


    </Route>





            </Route>

        </Routes>
        </BrowserRouter>
      
        </>
    )
}

export default Routing;