
import ProductsList from "../Products/ProductsList";
 import styles from './Dashboard.module.css';
import UserNavbar from "../UserNavbar/UserNavbar";
import AboutUs from "../About/AboutUs";
import { Outlet } from "react-router-dom";

function Dashboard(){


    return (
    
 
  
  <div >
    <div className={styles.TopBanner}>
        <p>100% original <span className={styles.DotCsswrapper}>&middot;</span >Home Made <span className={styles.DotCsswrapper}>&middot;</span>No Preservatives</p>
    </div>
    <UserNavbar/>
    <AboutUs/>
    <ProductsList/>
    <Outlet/>
  </div>

  
  
    )
}
  
export default Dashboard;