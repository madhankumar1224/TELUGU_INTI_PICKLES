
import styles from './Admin.module.css';

import logo from '../../assets/muggu2.png';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
function Adminpage(){

    const dashboardMenu=[{icon:"bi bi-menu-button-wide-fill",linkComponent:'admindashboard',linkContent:"dashboard"},
        {icon:"bi bi-bag-dash-fill",linkComponent:'products',linkContent:"Products"},
        {icon:"bi bi-cart-check-fill",linkComponent:'orders',linkContent:"Orders"},
        {icon:"bi bi-person-check-fill",linkComponent:'customers',linkContent:"Customers"},
        {icon:"bi bi-bar-chart-fill",linkComponent:'analaytics',linkContent:"Analytics"},
        {icon:"bi bi-gear-fill",linkComponent:'settings',linkContent:"Settings"}
    ]





const [sidebarOpen,setSidebarOpen]=useState(false);

const toggleSidebar=()=>{
    setSidebarOpen(prev=>!prev);
}

const closeSidebar=()=>{
    setSidebarOpen(false);
}


    return (
        <>
    <div className={styles.parentContainer}>
        <div className={`${styles.firstChildWrapper}
        ${sidebarOpen ? styles.sidebarOpen : ""}`}
        >
         <div className={styles.titleLogoCss}>
            <img src={logo} alt="logo"  className={styles.imgLogo} />
            <p className={styles.titleText}>Telugu Pachalu</p>
           {sidebarOpen && <i className={`bi bi-list ${styles.MenuListInSidebar}` }  onClick={closeSidebar}></i>} 

         </div>
         <div className={styles.roleOfPersonCss}>
            <h4>Admin</h4>
         </div>
       {dashboardMenu.map((item, index) => (
  <div key={index} className={styles.menuCss}>
    <i className={item.icon}></i> 
    <Link to={`/admin/${item.linkComponent}`} className={styles.linksMenu} onClick={closeSidebar}>
      {item.linkContent}
    </Link>
  </div>
))}


       


        </div>
        <div className={styles.secondChildwrapper}>
            
            <Navbar     toggleSidebar={toggleSidebar}/>

            <div className={styles.insideSecondSecondChild}>
              <Outlet/>
            </div>
        </div>
    </div>
        </>
    )
}

export default Adminpage;