
import React from "react";
import { Link } from "react-router-dom";
import mugguLogo from '../../../assets/muggu2.png';
import styles from './UserHomeNavbar.module.css';
function UserHomeNavbar(){

    return (
        <>
         <div   className={styles.userHomeNavbarContainer}>
            <div className={styles.titleAndLogoContainer}>
                    <img src={mugguLogo} alt="title" className={styles.compLogo}/>
                    <p  className={styles.titleName}>Telugu Inti Pickles</p>
                    </div>
        {/* <Link to="/"  className={styles.LinkElements} >Home</Link> */}
        <Link to='/login'   className={styles.LinkElements} >Login</Link>
        <Link to="/signup"  className={styles.LinkElements} >Signup</Link>
        </div>
        </>
    )
}

export default UserHomeNavbar;