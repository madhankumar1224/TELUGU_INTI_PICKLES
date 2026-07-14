


import { useContext, useState } from 'react';
import styles from './AddProduct.module.css';
//import styles from '../Products/Products.module.css';

import Logo from '../../assets/muggu2.png';
import ceramicJar from '../../assets/ceramic-pickle-jar-removebg.png';

//import { AuthProvider } from '../../AuthProvider';
//import AuthorContext from '../../AuthContext';

import {useProductAction} from '../../APIS/useProductAction';
import { addToProduct } from '../../Actions/ProductAction/ProductActions';
// import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import sty from './AddProduct.module.css';

function AddProductModal({open,onClose,onProductAdded,token}){


   




//const url = "http://localhost:5000/product/addPickle";
 const url="https://backend-telugu-inti-pachalu.onrender.com/product/addPickle"

const config = {
  headers: {
    'Authorization': `Bearer ${token} `,
    'Accept': 'application/json',
    // 'content-type':'multipart/formdata'
  }
};


const {addExecutePicklefunction,
 //4 newProductData,

}=useProductAction(url,config);

  

  const [fileNames, setFileNames] = useState([]);


  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log("files",files);
    const namesArray = [];

       for (let i = 0; i < files.length; i++) {
      namesArray.push(files[i].name);
    }


    setFileNames(namesArray);
  };  









 const [newPickleList,setNewPickleList]=useState({
  pickleName:'',
  pickleId:'',
  picklePrice:'',
  pickleDiscont:"",
  pickleCategory:'',
  pickleDescription:'',
  pickleImage:[...fileNames]
 })


  if(!open){
        return null;
    }

const resetForm=()=>{

    setNewPickleList({
        pickleName:"",
        pickleId:"",
        picklePrice:"",
        pickleDiscont:"",
        pickleCategory:"",
        pickleDescription:"",
        pickleImage:[]
    });

    setFileNames([]);

};

const closeModal=()=>{

    resetForm();

    onClose();

}


     
function AddingPickleHandler(event){
console.log("event",event);
// const name=event.target.name;
// const value=event.target.value;
// console.log("event.target",event.target);
const { name, value, files } = event.target;

  setNewPickleList((prev)=>{
   
   if(files){
    console.log("files files.....",files);

  const selectedFiles = Array.from(files);
  console.log("selectedFiles",selectedFiles);

        setFileNames(selectedFiles.map(file => file.name));

        setNewPickleList(prev => ({
            ...prev,
            [name]: selectedFiles
        }));
   }
  return {...prev,[name]:value}
})

}




// add tasks pickle   
async function pickleSubmitHandler(event){
event.preventDefault();
console.log("new PickleList",newPickleList);

   const formData = new FormData();

    formData.append("pickleName", newPickleList.pickleName);
    formData.append("pickleId", newPickleList.pickleId);
    formData.append("picklePrice", newPickleList.picklePrice);
    formData.append("pickleDiscont", newPickleList.pickleDiscont);
    formData.append("pickleCategory", newPickleList.pickleCategory);
    formData.append("pickleDescription", newPickleList.pickleDescription);

    // Append all images
    newPickleList.pickleImage.forEach(file => {
        formData.append("pickleImage", file);
    });


    console.log("formData",formData);

try{
 let createdProduct=await addExecutePicklefunction(formData);
 console.log("responseInProduct",createdProduct.product);
 console.log("responseInProduct",createdProduct.data);



 toast.success(createdProduct.message, {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
//  transition: Bounce,
});


        onProductAdded(createdProduct.product);

     closeModal();







    console.log(createdProduct);
}catch(error){
  console.log("error of ......", error);
  


}

}



 


    return (
        <>
         <div className={`${styles.modalOverlay}`}>
            <div className={styles.addProductsToggleDesign} 
            // style={{ pointerEvents: "auto" }}
            >
              <div  className={styles.addPopUpContainer}>
              <div  className={styles.addPopUptitle}>
                <img src={Logo} alt="titlelogo" />
              </div>
              <div  className={styles.TaskTittle}>
                <p>Add New Pickles To Telugu Pachalu App</p>
              </div>
              <form    method='post' encType="multipart/form-data"  onSubmit={pickleSubmitHandler}>
                <div className={styles.addingPicklesTask}>
                <div   className={styles.addingPicklesChildTask} >
                <label htmlFor="productName">Product Name</label>
                <input type='text' id="productName" name='pickleName' value={newPickleList.pickleName} 
                onChange={AddingPickleHandler}
                placeholder='product Name' className={styles.inputTagDesign} />
                   </div>
                   <div  className={styles.addingPicklesChildTask}>
                   <label htmlFor="productSID">Product SID</label>
                <input type='text' id='productSID' name='pickleId'  value={newPickleList.pickleId}  onChange={AddingPickleHandler} placeholder='product Serial No'  className={styles.inputTagDesign}/>
        </div>
        <div   className={styles.addingPicklesChildTask}>
                  <label htmlFor="price">Price</label>
                <input type="text"  id='price' name='picklePrice'  value={newPickleList.picklePrice}   onChange={AddingPickleHandler}   placeholder='price' className={styles.inputTagDesign}     />
        </div>
        <div   className={styles.addingPicklesChildTask}>
                 <label htmlFor="description">description</label>
                <textarea type='text'     id='description' name='pickleDescription' onChange={AddingPickleHandler}  value={newPickleList.pickleDescription}   placeholder='description' className={styles.inputTagDesign} ></textarea>
        </div>
        <div  className={styles.addingPicklesChildTask}>
        <label htmlFor="category-select">Choose a Category:</label>
        <select name="pickleCategory" value={newPickleList.pickleCategory}   onChange={AddingPickleHandler} id="category-select" className={styles.inputTagDesign}>
          <option value="">-- Please choose an option --</option>
          
          <optgroup label="pickles" className={styles.inputTagDesign}>
            <option value="non veg">non veg</option>
            <option value="veg">veg</option>
            <option value="masalas">masalas</option>
          </optgroup></select>
         
        </div>
        
        <div   className={styles.addingPicklesChildTask}>
                <label htmlFor='discount'>discount</label>
                <input type="text" id='discount' name='pickleDiscont' onChange={AddingPickleHandler}  value={newPickleList.pickleDiscont}  placeholder='discount' className={styles.inputTagDesign}/>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         <div className={styles.addingPicklesChildTask}>
              <label htmlFor='file'>product Image</label>
              
          
              <div className={`${styles.fileUploadWrapper} ${fileNames.length > 0 ? styles.hasFiles : ''}`}> 
                <input 
                  type="file" 
                  multiple 
                  name="pickleImage" 
                  placeholder='drag and upload'
                  id={styles.imageUploadDesign}
                 
                   onChange={AddingPickleHandler}
                  required
                  accept="image/png, image/jpeg,.pdf, .doc, .docx, .txt"
                  capture="environment" 
                   // onChange={handleFileChange} 
                  /* 3. Listen for changes */
                />
                
                {fileNames.length === 0 ? (
                  <>
                    <img src={ceramicJar} alt='ceramic Pot' className={styles.insideJarImage}/>
                    <span className={styles.uploadText}>Drag & Upload</span>
                  </>
                ) : (
                  <div className={styles.fileListContainer}>
                    <p className={styles.fileListTitle}>Selected Files ({fileNames.length}):</p>
                    <ul className={styles.fileList}>
                      {fileNames.map((name, index) => (
                        <li key={index} className={styles.fileItem}>{name}</li>
                   
        
        
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
          
        
        
        
        
        
        
        
        
        <div  className={`${styles.addingPicklesChildTask} ${styles.addingButtonsPickleDesign}`}>
          <button type='reset'  className={styles.resetButtonDesign}>reset values</button>
        <button type='submit'  className={`${styles.inputTagDesign} ${styles.AddPickleDesign}` } >Add Pickle</button>
        </div>
              </div>
              </form>
        
        
             <div className={styles.PickleCloseDesignContainer}>
              <button onClick={closeModal} id={styles.PicklecloseDesign}>
                Close
              </button>
         </div>
        
              </div>
        
        
        
        
        
        
            </div>
          </div>
        </>
    )
}

export default AddProductModal;