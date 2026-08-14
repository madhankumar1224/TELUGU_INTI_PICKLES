

import { NavLink ,Link} from 'react-router-dom';
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

           <div  className={`${styles.searchContainer} ${styles.box}`}>
            <input type="search" />
            <i className={`bi bi-search ${styles.searchIcon}`}></i>
            </div> 

            <Link to="/dashboard/home" className={`${styles.homeIconContainer} ${styles.box}`}>
              <i className="bi bi-house-fill"></i>
              <p>Home</p>
            </Link> 

              <NavLink to="/dashboard/products" className={`${styles.productsIconContainer} ${styles.box}`}>
              <i className="bi bi-bounding-box-circles"></i>
              <p>Products</p>
              </NavLink> 

                <NavLink to="/dashboard/about us" className={`${styles.aboutUsIconContainer}  ${styles.box}`}>
              <i className="bi bi-person-check-fill"></i>
              <p>About us</p>
              </NavLink> 

              <NavLink to='/dashboard/cart'  className={`${styles.cartIconContainer}  ${styles.box}`}>
             <i className={`bi bi-cart4 ${styles.cartLogoLaptop}`}></i>
             <p>cart</p>

  
             </NavLink>



             <i className={`bi bi-cart4 ${styles.cartLogo}`}></i>
       <div>


          <UserSidebar isSidebarOpen={isSidebarOpen}  sidebarToggle={sidebarToggle}/>
       </div>
      
      </nav>
    )
}

export default UserNavbar;