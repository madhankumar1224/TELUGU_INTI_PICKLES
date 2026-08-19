
import { useParams } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useState ,useContext} from "react";
import styles from './ProductItem.module.css';
import AboutUs from "../About/AboutUs";
import AuthorContext from "../../../AuthContext";
import useCart from "../../../APIS/useCart";
import { addToCart,NewItemAddToCart,ExistingItemUpdateToCart } from "../../../Actions/ProductAction/CartActions";
function ProductItem(){


  const dispatch=useDispatch();

    const {productId} =useParams();
    console.log("param",productId);
const {userDetailsAndToken}=useContext(AuthorContext);
  const userProductsList=useSelector(state => state.userProductsListToState.products);
  const filterProduct=userProductsList.filter((pickle)=> pickle._id === productId);
  console.log("filterProduct",filterProduct);



  const [quantity, setQuantity] = useState(1);

 

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => (previous > 1 ? previous - 1 : 1));
  };



 // const url = "http://localhost:5000/cart/addtocart";
  //const url='https://backend-telugu-inti-pachalu.onrender.com/cart/addtocart';

const config = {
  headers: {
    'Authorization': `Bearer ${userDetailsAndToken.token} `,
    'Accept': 'application/json',
    // 'content-type':'multipart/formdata'
  }
};


const {addToCartApi}=useCart(url,config);

  async function cartHandler(pickleProduct){
    console.log("cart product",pickleProduct);
    console.log("quantity:::",quantity);

let pickleDetails={
    productId:pickleProduct._id,
    quantity:quantity
}
console.log("pickleDetails::::0",pickleDetails);
const response =await addToCartApi(pickleDetails);
console.log("response inside cart",response);


if(response.data.message === "Product added to cart"){
  dispatch(addToCart(response.data.cart.ProductsInCart));
  
}else if(response.data.message === "New product added to cart"){
  dispatch(NewItemAddToCart(response.data.cart.ProductsInCart));
}else if(response.data.message === "Product quantity updated"){
 dispatch(ExistingItemUpdateToCart(response.data.cart.ProductsInCart));
}


  }





const [{ productName, PickleDiscount, ProductPrice, pickleImage,ProductDescription}] = filterProduct;


const [{ contentType, fileName, image }] = pickleImage;

    return (
        <>
        <div className={styles.TopBanner}>
                <p>100% original <span className={styles.DotCsswrapper}>&middot;</span >Home Made <span className={styles.DotCsswrapper}>&middot;</span>No Preservatives</p>
            </div>
        <UserNavbar/>

        <div className={styles.pickleContainer}>
            <div  className={styles.pickleImageContainer}>
                <img src={image}  alt="pickleItemImage"  className={styles.pickleItemImage} />
            </div>
            <div className={styles.pickleDetailsContainer}>
                <h3 className={styles.productTitle}>{productName}</h3>
                <p  className={styles.productPrice}>&#8377; {ProductPrice}</p>
                <p className={styles.productDesc}>{ProductDescription}</p>
                <p className={styles.productQuant}>250 grams</p>
                <p className={styles.productQuant}>Naturaly prepared</p>
                <p className={styles.productQuant}>No Preservatives</p>
                
            <div className={styles.quantitySection}>

              <span className={styles.quantityLabel}>
                Quantity:
              </span>

              <div className={styles.quantityControl}>

                <button
                  type="button"
                  onClick={decreaseQuantity}
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                >
                  +
                </button>

              </div>

            </div>


                 <button  className={styles.cartDetails}  onClick={()=>cartHandler(filterProduct[0])}>Add to Cart</button>
                 <button    className={styles.BuyButton}>Buy now</button>

            </div>
            {/* <AboutUs/> */}
        </div>

        </>
    )
}

export default ProductItem;