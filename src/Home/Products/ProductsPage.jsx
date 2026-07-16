
import { useContext, useState } from 'react';
import styles from './Products.module.css';
import { useEffect } from "react";


import Logo from '../../assets/muggu2.png';
import ceramicJar from '../../assets/ceramic-pickle-jar-removebg.png';

import { AuthProvider } from '../../AuthProvider';
import AuthorContext from '../../AuthContext';

import {useProductAction} from '../../APIS/useProductAction';
import { addToProduct ,allProductItems,deleteProductItem,updateProductItem} from '../../Actions/ProductAction/ProductActions';
 import { useDispatch, useSelector } from 'react-redux';
import EditProductModal from './EditProductModal';

import AddProductModal from '../AddProductModal/AddProductModal';
import { toast } from 'react-toastify';

import { createPortal } from "react-dom";

function ProductsPage(){

const dispatch=useDispatch();  

const productsList = useSelector(
    state => state.addProductToState.items
);

console.log("productsList",productsList);


console.log(productsList);
console.log(Array.isArray(productsList));

const {userDetailsAndToken}=useContext(AuthorContext);
console.log("product into inside",userDetailsAndToken);


//const url = "http://localhost:5000/product/addPickle";
  const url='https://backend-telugu-inti-pachalu.onrender.com/product/addPickle';

const config = {
  headers: {
    'Authorization': `Bearer ${userDetailsAndToken.token} `,
    'Accept': 'application/json',
    // 'content-type':'multipart/formdata'
  }
};


const {addExecutePicklefunction,
 //4 newProductData,
  allPicklesFunction,
deleteProductPickleFunction,updatePickleFunction
}=useProductAction(url,config);






useEffect(() => {
 
  const fetchAllData = async () => {
    try {
      //const url = "http://localhost:5000/product/allPickles";
      const url='https://backend-telugu-inti-pachalu.onrender.com/product/allPickles';
      const config = {
        headers: {
          'Authorization': `Bearer ${userDetailsAndToken.token}`,
          'Accept': 'application/json'
        }
      };

      // 1. Wait for axios to actually complete and return the records
      const allProducts = await allPicklesFunction(url, config);
      console.log("Actual products resolved from hook:", allProducts);

      if (allProducts) {
  
console.log("dispatch",dispatch);
        dispatch(allProductItems(allProducts));
        console.log("dispatch",dispatch);
      }
    } catch (error) {
      console.error("Failed to process products in component:", error);
    }
  };

  if (userDetailsAndToken?.token) {
    fetchAllData();
  }
}, [
 //6 newProductData, 
  userDetailsAndToken]); 



  const [fileNames, setFileNames] = useState([]);

  



















const addProductToggleHandler=()=>{
    setShowAddModal(prev => !prev);
//     setFileNames([]);
//     setNewPickleList((prev)=>{
//       return {  pickleName:'',
//   pickleId:'',
//   picklePrice:'',
//   pickleDiscont:"",
//   pickleCategory:'',
//   pickleDescription:'',
//   pickleImage:fileNames
// }
// }
// )
    }













 const [newPickleList,setNewPickleList]=useState({
  pickleName:'',
  pickleId:'',
  picklePrice:'',
  pickleDiscont:"",
  pickleCategory:'',
  pickleDescription:'',
  pickleImage:[...fileNames]
 })








const [actionButton,setActionButton]=useState(false);
const [showEditModal, setShowEditModal] = useState(false);

const [selectedProduct, setSelectedProduct] = useState(null);










const [showAddModal, setShowAddModal] = useState(false);

const handleProductAdded = (product) => {
    dispatch(addToProduct(product));
};





async function actionHandler(action,product){
  console.log("proict",product);


  if(action=='delete'){
     const confirmDelete = window.confirm(`Are you sure you want to delete ${product.productName}?`);
     if(confirmDelete){
     // const url2=`http://localhost:5000/product/deletePickle/${product._id}`;
       const url2=`https://backend-telugu-inti-pachalu.onrender.com/product/deletePickle/${product._id}`;
      const config2 = {
  headers: {
    'Authorization': `Bearer ${userDetailsAndToken.token} `,
    'Accept': 'application/json',
    // 'content-type':'multipart/formdata'
  }

 

  
};

try {
  


  const deletedProduct=await deleteProductPickleFunction(url2,config2); 

  console.log("deletedProduct",deletedProduct.data);
  dispatch(deleteProductItem(deletedProduct.data))



 

  setActionButton(true);


  console.log("inside action handler",product);

 toast.success(deletedProduct.message, {
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



} catch (error) {
  console.log("error",error);
   toast.error('session Expired, login again', {
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


      
     }
  }




}





    return (
        <>
        <div  className={styles.insideSecondFirstChild}>
                {/* <input type="search" name='sea' placeholder='search'  />
                <input type="search" name='sea' placeholder='search'  />
                <button style={{backgroundColor:"#800020",color:"white"}} >add Products</button> */}

                <div className={styles.SeacrchCateogryCss}>
                   <div className={styles.searchInputCss}>
                    <input type='search' name="search" placeholder='search'  className={styles.searchDesign1} />
                     <i className="bi bi-chevron-down"></i>
                     </div>
                </div>
                <div  className={styles.ButtonAndSearchContainer}>
                    <div  className={styles.SecondSearchCss}>
                           
                       <input type='search' name="search" placeholder='search'   className={styles.searchDesign}/>
                       <i className="bi bi-search"></i>
                    </div>
                       <div   className={styles.AddButtonDesign}  
                        onClick={addProductToggleHandler} 
                         >
                           <i className="bi bi-plus-lg"></i>
                       <button type='submit'>Add Products</button>






                    </div>
                </div>
              </div>


             
              <div   className={styles.insideTwoChild} 
    //               style={{
    //     overflowY: addProductState ? "hidden" : "auto",
    //     pointerEvents: addProductState ? "none" : "auto", tabIndex:"-1"
    // }}
    >
                


<div className={styles.tableWrapper}>


                <table style={{width:'100%',borderCollapse: "collapse"}}>
                    <thead  style={{width:'100%',height:'50px',borderBottom: "1px solid #DAA520",textAlign:'left',color:'#800020',position:'sticky',top:'0',zIndex:1,backgroundColor:"#fff"}}>
                        <tr>
                        <th>product Image</th>
                        <th>product Name</th>
                        <th>product Serial No</th>
                        <th>category</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>supplier</th>
                        <th>actions</th>
                        </tr>
                        
                    </thead>
                  











<tbody>
  {productsList?.map((product, index) => (
    <tr
      key={product._id || index}
      style={{
        borderBottom: "1px solid #DAA520",fontFamily: 'Inter, sans-serif', fontSize:'0.8rem'
      
      }}
     
    >
     
      <td>
        {product.pickleImage?.length > 0 ? (
          <img
            src={product.pickleImage[0].image}
            alt={product.pickleName}
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              marginLeft:"0.4rem",   
            
              border: "1px solid #ccc"
            }}
          />
        ) : (
          "No Image"
        )}
      </td>

    
      <td>{product.productName}</td>

      <td>{product.ProductId}</td>

 
      <td>{product.PickleCateogry}</td>

      <td>₹ {product.ProductPrice}</td>


      <td>{product.stock || "Available"}</td>

   
      <td>{product.supplier || "-"}</td>

      
      <td   >
         <div className={styles.actionsDesign}>
        <button className={styles.editBtn}
            onClick={() => {

        setSelectedProduct(product);

        setShowEditModal(true);

    }}
         >
       <i className="bi bi-pencil"></i>
            <span>Edit</span>
    </button>



    <button className={styles.deleteBtn} 
    onClick={() => actionHandler('delete',product)}
    >
      <i className="bi bi-trash"></i>
            <span>Delete</span>
    </button>
  </div>
      </td>
    </tr>
  ))}
</tbody>










                </table>

</div>


              









<EditProductModal

    open={showEditModal}

    product={selectedProduct}

    onClose={() => setShowEditModal(false)}

    updatePickleFunction={updatePickleFunction}

    config={config}

    dispatch={dispatch}

    updateProductItem={updateProductItem}

/>





{
createPortal(

<AddProductModal

    open={showAddModal}

    onClose={() => setShowAddModal(false)}

    onProductAdded={handleProductAdded}

    token={userDetailsAndToken.token}

/>,

document.getElementById("modal-root")

)
}



 




                  
             
              </div>







    
 



              
        </>
    )
}

export default ProductsPage;