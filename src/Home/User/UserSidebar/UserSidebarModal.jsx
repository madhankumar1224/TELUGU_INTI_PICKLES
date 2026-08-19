
import React from "react";
import { createPortal } from "react-dom";
import styles from './UserSidebar.module.css';
import { Link } from "react-router-dom";
 import ceramicPot from '../../../assets/ceramic-pickle-jar.jpg';
 import picklesLogo from '../../../assets/ceramic_pickle_pot-removebg.png';
//import mugguLogo from '../../../assets/muggu2.png';

const UserSidebarModal = React.memo(({isSidebarOpen,sidebarToggle})=>{
console.log("isSidebarOpen inside value",isSidebarOpen);

// if(!isSidebarOpen){
//     return null;
// }


  const dashboardMenu=[
        {icon:"bi bi-house-door-fill",linkComponent:'home',linkContent:"Home"},
        {icon:"bi bi-bounding-box-circles",linkComponent:'products',linkContent:"Products"},
        {icon:"bi bi-bag-dash-fill",linkComponent:'orders',linkContent:"My Orders"},
        {icon:"bi bi-person-check-fill",linkComponent:'aboutus',linkContent:"About us"},
        {icon:"bi bi-suit-heart-fill",linkComponent:'wishlist',linkContent:"wishlist"},
        {icon:"bi bi-cart4",linkComponent:'cart',linkContent:"My Cart"}
    ]





    return createPortal(
     <div  className={ isSidebarOpen?styles.sidebarvisible:styles.sidebarhide}>
        <div className={styles.sidebarListContainer}>
           
        <div  className={styles.crossMarkContainer}> 
            <img src={ceramicPot}  alt="titleImage"  className={styles.ceramicPot} />
            <p className={styles.titleDesign}>Telugu Inti Pickles</p>
        <i className={`bi bi-x-lg ${styles.crossMarkDesign}`} onClick={sidebarToggle}></i>
        </div>
        {dashboardMenu.map((list,index)=>(
            
            <Link to ={`/dashboard/${list.linkComponent}`} key={index} className={styles.menuList} >
             <i className={`${list.icon} ${styles.iconDesign}`}></i>
             <span  className={styles.contentDesign}>{list.linkContent}</span>
            </Link>
  ))}


   
  <img src={picklesLogo}  alt="loading"  className={styles.picklesDesign} />
   <p className={styles.picklesContent} >Made with Love <i className={`bi bi-balloon-heart-fill ${styles.loveicon}`}></i></p>
    <p className={styles.picklesContent} >just like at home </p>
  </div>

     </div>  ,document.getElementById('sidebar-modal-root')
    )
});

export default UserSidebarModal;