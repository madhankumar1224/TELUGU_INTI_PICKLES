
import styles from './ProductsList.module.css';

import AuthorContext from '../../../AuthContext';
import { useContext, useEffect } from 'react';

import { useProductAction } from '../../../APIS/useProductAction';
// import { allProductsList } from '../../../Actions/ProductAction/UserDisplayProductsActions';
import { allProductsList } from '../../../Actions/ProductAction/UserDisplayProductsActions';
import UserProductsReducer from '../../../Reducers/UserProductsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import {LazyLoadingSpinner} from '../../LazySpinner/LazyLoadingSpinner';

const ProductsList =({redirection}) =>{


const  {userDetailsAndToken}=useContext(AuthorContext);

const {allPicklesFunction}=useProductAction();

const dispatch=useDispatch();  

const userProductsList=useSelector(state => state.userProductsListToState.products);
console.log("userProductsList",userProductsList);

const navigate=useNavigate();

// useEffect(()=>{

//     const fetchAllProducts =async ()=>{


//  try {

//       const url = "http://localhost:5000/product/allProductsPickle";
//      // const url='https://backend-telugu-inti-pachalu.onrender.com/product/allProductsPickle';
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${userDetailsAndToken.token}`,
//           'Accept': 'application/json'
//         }
//       };

//       // 1. Wait for axios to actually complete and return the records
//       const allProducts = await allPicklesFunction(url, config);

//       console.log("all products fara::",allProducts);
//       if(allProducts){
//          dispatch(allProductsList(allProducts))
//       }

//     }catch(error){
      
//     }

//     }

//     if(userDetailsAndToken?.token){
//         fetchAllProducts();
//     }


// },[])





































useEffect(() => {
    const fetchAllProducts = async () => {
        try {
            let url = "";
            let config = {};

            // 1. Check if user is logged in
            if (userDetailsAndToken?.token) {
                // Authenticated Route
                url = "http://localhost:5000/product/allProductsPickle";
                     // const url='https://backend-telugu-inti-pachalu.onrender.com/product/allProductsPickle';

                config = {
                    headers: {
                        'Authorization': `Bearer ${userDetailsAndToken.token}`,
                        'Accept': 'application/json'
                    }
                };
            } else {
                // Public Route (No Token Required)
                url = "http://localhost:5000/product/publicProductsPickle"; 
                config = {
                    headers: { 'Accept': 'application/json' }
                };
            }

            // 2. Fetch the records using your existing hook function
            const allProducts = await allPicklesFunction(url, config);

            console.log("Fetched products successfully:", allProducts);
            if (allProducts) {
                // 3. Update Redux store so both Home and Dashboard can see it
                dispatch(allProductsList(allProducts));
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Trigger the fetch immediately, regardless of login status
    fetchAllProducts();

}, [userDetailsAndToken?.token, dispatch, allPicklesFunction]); // Added accurate dependencies











function redirectHandler(pickle){

if(redirection){
    console.log("redirection::",redirection);
navigate('/login');
}else{
    navigate(`/dashboard/products/${pickle._id}`);
}

}











    return (
       <div  className={styles.productsListContainer}>
        <h3  className={styles.headingDesign}>Our Pickle Collection</h3>
      <div className={styles.picklesContainer}>
       {
       (userProductsList || []).length === 0 ? (
               <p className={styles.LoadingCollectionCss}>Loading Pickles 
               <span className={`${styles.dot} ${styles.dot1}`}>.</span>
    <span className={`${styles.dot} ${styles.dot2}`}>.</span>
    <span className={`${styles.dot} ${styles.dot3}`}>.</span></p>
                  
            ) : (
       
       userProductsList.map((pickle,index)=>( 

            <div key={pickle._id || index}  className={styles.singleItemContainer} onClick={()=>redirectHandler(pickle)}  >
                <img src={pickle.pickleImage[0].image}  alt="pickleImage"  className={styles.imageOfPickleDesign} />
                <p className={styles.productTitle}>{pickle.productName}</p>
                 <p className={styles.productPrice}>&#8377;{pickle.ProductPrice} (250grams)</p>
                 <button className={styles.cartButtonCss}>
                   <i className="bi bi-cart2"></i>
                    <span>Add To cart</span>
                 </button>

             
            </div>
        )))} 
</div>
       </div>
    )

}

export default ProductsList;