
import ceramicSPinner from '../../assets/ceramic-pickle-jar-removebg.png';



import  styles from './LoadingSpinner.module.css';


export function LazyLoadingSpinner(){

   


  


// }

    return (
    <div className={styles.pageContainer}>
      <div className={styles.spinnerWrapper}>

        <div className={styles.spinnerClass}></div>
        
       
        <img 
          src={ceramicSPinner} 
          className={styles.pickleJarImage} 
          alt="Loading..." 
        />
      </div>
      

      <p className={styles.loadingText}>Loading delicious pickles...</p>
    </div>
  );

}