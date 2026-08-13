
import styles from './ProductsList.module.css';

import AuthorContext from '../../../AuthContext';
import { useContext, useEffect } from 'react';

import { useProductAction } from '../../../APIS/useProductAction';
// import { allProductsList } from '../../../Actions/ProductAction/UserDisplayProductsActions';
import { allProductsList } from '../../../Actions/ProductAction/UserDisplayProductsActions';
import UserProductsReducer from '../../../Reducers/UserProductsReducer';
import { useDispatch, useSelector } from 'react-redux';

const ProductsList =() =>{


const  {userDetailsAndToken}=useContext(AuthorContext);

const {allPicklesFunction}=useProductAction();

const dispatch=useDispatch();  

const userProductsList=useSelector(state => state.userProductsListToState.products);
console.log("userProductsList",userProductsList);



useEffect(()=>{

    const fetchAllProducts =async ()=>{


 try {

      const url = "http://localhost:5000/product/allProductsPickle";
     // const url='https://backend-telugu-inti-pachalu.onrender.com/product/allProductsPickle';
      const config = {
        headers: {
          'Authorization': `Bearer ${userDetailsAndToken.token}`,
          'Accept': 'application/json'
        }
      };

      // 1. Wait for axios to actually complete and return the records
      const allProducts = await allPicklesFunction(url, config);

      console.log("all products fara::",allProducts);
      if(allProducts){
         dispatch(allProductsList(allProducts))
      }

    }catch(error){
      
    }

    }

    if(userDetailsAndToken?.token){
        fetchAllProducts();
    }


},[])

    return (
        <>
        <>List of Products</>
        </>
    )

}

export default ProductsList;