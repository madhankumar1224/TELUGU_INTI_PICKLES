
import ceramicSPinner from '../../assets/ceramic-pickle-jar-removebg.png';



import  styles from './LoadingSpinner.module.css';


export function LazyLoadingSpinner(){

   


  


// }

    return (
    <div className={styles.pageContainer}>
      <div className={styles.spinnerWrapper}>
        {/* The spinning outer border */}
        <div className={styles.spinnerClass}></div>
        
        {/* The non-spinning image in the center */}
        <img 
          src={ceramicSPinner} 
          className={styles.pickleJarImage} 
          alt="Loading..." 
        />
      </div>
      
      {/* The message below the loader */}
      <p className={styles.loadingText}>Loading delicious pickles...</p>
    </div>
  );

}