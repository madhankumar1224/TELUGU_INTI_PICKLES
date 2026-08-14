
import React from "react";
import styles from './AboutUs.module.css';
import ceramicPickle from '../../../assets/ceramic_pickle_pot-removebg.png';
const AboutUs = () =>{
    return (
        <div  className={styles.aboutusContainer}>
       <div className={styles.productSpecialities}>
        <h3 className={styles.titleName}>Authentic Telugu Pickcles</h3>
        
        <h3 className={styles.titleCaption}>Made with Love</h3>
        <p className={styles.titleDescription}>Bringing the traditional Andhra and Telangana to your home. Made with Natural Ingredients ,home Made receipes and lots of love</p>
        

            <div className={styles.QualitiesContainer}>
            <div className={styles.QualitiesBox}>
              <i className="bi bi-flower3"></i>
                <p>No Preservatives</p>
            </div >
            <div  className={styles.QualitiesBox} >
                <i className="bi bi-leaf-fill"></i>
                <p>100% Natural</p>
            </div>
            <div  className={styles.QualitiesBox}>
               <i className="bi bi-house-check-fill"></i>
                <p>Home Made</p>
            </div>
            </div>
        </div>
        <img src={ceramicPickle}  alt="picklesImage"  className={styles.ceramicPickleCss}/>
        </div>
    )
}

export default AboutUs;