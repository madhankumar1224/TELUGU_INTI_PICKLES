
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
//import styles from './Navbar2.module.css';
function navbar({toggleSidebar}){

    return (<>
    <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
            <i className={`bi bi-list ${styles.menuListDesign}`} onClick={toggleSidebar}></i>
            <p  className={styles.routeNameDesign}>Telugu Pachalu Products</p>
            <div  className={styles.searchCotainer}>
                <input type="search"  name="search" placeholder='search' />
                <i className='bi bi-search'></i>
            </div>
            <div  className={styles.IconLinksContainer}>
            <Link to="/"   className={styles.LinksDesign}>new Batches</Link>
            <Link to="/"  className={styles.LinksDesign}>Gifting</Link>
            <Link to="/"  className={styles.LinksDesign}>Our Story</Link>
               <i className='bi bi-bell-fill'></i>
                <i className='bi bi-bag-fill'></i>
                <i className='bi bi-person-fill'></i>
                </div>

        </div>

            </div>
    </>)
}

export default navbar;