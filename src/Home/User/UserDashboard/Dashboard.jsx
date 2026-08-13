
import ProductsList from "../Products/ProductsList";
 import styles from './Dashboard.module.css';
import UserNavbar from "../UserNavbar/UserNavbar";

function Dashboard(){


    return (
    
 
  
  <div>
    <div className={styles.TopBanner}>
        <p>100% original <span className={styles.DotCsswrapper}>&middot;</span >Home Made <span className={styles.DotCsswrapper}>&middot;</span>No Preservatives</p>
    </div>
    <UserNavbar/>
 
    <ProductsList/>
  </div>

  
  
    )
}
  
export default Dashboard;