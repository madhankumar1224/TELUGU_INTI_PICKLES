
import React, { useEffect,useMemo } from "react";
import styles from './CartList.module.css';
import UserNavbar from "../UserNavbar/UserNavbar";
import { useDispatch, useSelector } from "react-redux";
import AuthorContext from '../../../AuthContext';
import { useContext } from "react";
import useCart from "../../../APIS/useCart";
import { toast } from 'react-toastify';
import { AllCartList,DeleteFromCartList } from "../../../Actions/ProductAction/CartActions";
const CartList=()=>{


const dispatch=useDispatch();
const  {userDetailsAndToken}=useContext(AuthorContext);



                 const config = useMemo(() => {
        return {
            headers: {
                'Authorization': `Bearer ${userDetailsAndToken?.token}`,
                'Accept': 'application/json'
            }
        };
    }, [userDetailsAndToken?.token]);

const {cartListAPI,deleteFromCartAPI}=useCart(config);

const cartData=useSelector((state)=>state.cartListofUser.cartItems);
console.log("cartData",cartData);



const handleDeleteItemFromCart = async (productId) => {
     
      const deleteUrl='https://backend-telugu-inti-pachalu.onrender.com/cart/deletefromcartlist';
          //const deleteUrl = "http://localhost:5000/cart/deletefromcartlist";
            try {
                const response = await deleteFromCartAPI(deleteUrl,productId);
                console.log("Delete API response:", response);

                if (response && response.success) {
                   
                    dispatch(DeleteFromCartList(response.cart.ProductsInCart));

                      toast.success("Product Deleted from Cart", {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      // transition: Bounce,
                      });
                 
                } 
            } catch (error) {
                console.error("Error processing item deletion:", error);
            }
        
    };

   



useEffect(() => {
    const fetchAllProducts = async () => {
        try {
           
            let url;

            if (userDetailsAndToken?.token) {
         
               // url = "http://localhost:5000/cart/allCartListPickles";
                // url='https://backend-telugu-inti-pachalu.onrender.com/cart/allCartListPickles';

               const config = {
                    headers: {
                        'Authorization': `Bearer ${userDetailsAndToken.token}`,
                        'Accept': 'application/json'
                    }
                };
            } 

            const allProducts = await cartListAPI(config);

            console.log("Fetched cart List successfully:", allProducts);
            if (allProducts && allProducts.cart) {
              
                dispatch(AllCartList(allProducts.cart.ProductsInCart));
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    
    fetchAllProducts();

}, [userDetailsAndToken?.token, dispatch, cartListAPI]); 




    return (
        <>
         <div className={styles.TopBanner}>
                <p>100% original <span className={styles.DotCsswrapper}>&middot;</span >Home Made <span className={styles.DotCsswrapper}>&middot;</span>No Preservatives</p>
            </div>
        <UserNavbar/>


<div  className={styles.cartListContainer}>
  

    
            <div className={styles.cartListContainer}>
                <h1>Your Cart Items</h1>
                
                {cartData && cartData.length > 0 ? (
                    <div className={styles.cartItemsList}>
                        {cartData.map((item) => (
                            <div key={item._id || item.productId?._id} className={styles.cartItemRow}>
                                <div className={styles.itemDetails}>
                           
                                    <h3>{item.productId?.productName || "Pickle Product"}</h3>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price per Unit: ₹{item.unitPrice}</p>
                                    <p>Total: ₹{item.quantity * item.unitPrice}</p>
                                </div>
                                <button 
                                    className={styles.deleteButton} 
                                    onClick={() => handleDeleteItemFromCart(item.productId?._id || item.productId)}
                                >
                                    Remove Item
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.emptyCartMessage}>Your cart is currently empty.</p>
                )}
            </div>

        </div>
        </>
    )
}


export default CartList;