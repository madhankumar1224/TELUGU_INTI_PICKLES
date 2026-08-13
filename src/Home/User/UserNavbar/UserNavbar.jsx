

import { NavLink } from 'react-router-dom';
import styles from './UserNavbar.module.css';
import mugguLogo from '../../../assets/muggu2.png';
import UserSidebar from '../UserSidebar/UserSidebarModal';
import { useCallback, useState } from 'react';
function UserNavbar(){

const [isSidebarOpen,setSidebarOpen]=useState(false);

const sidebarToggle=useCallback(()=>{
    setSidebarOpen((prev)=>!prev);
});

console.log("isSidebarOpen parent",isSidebarOpen);
    return (
      <nav className={styles.navContainer}>
       


     
       <i className={`bi bi-list ${styles.menuListLogo}`} onClick={sidebarToggle}></i>
       
       <div className={styles.titleAndLogoContainer}>
        <img src={mugguLogo} alt="title" className={styles.compLogo}/>
        <p  className={styles.titleName}>Telugu Inti Pickles</p>
        </div>
             
         <i className={`bi bi-cart4 ${styles.cartLogo}`}></i>
             
       <div>


          <UserSidebar isSidebarOpen={isSidebarOpen}  sidebarToggle={sidebarToggle}/>
       </div>
      
      </nav>
    )
}

export default UserNavbar;