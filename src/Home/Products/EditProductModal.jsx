
import { useEffect, useState } from "react";
//import styles from "./Products.module.css";
 import styles from './EditProductModal.module.css';
import { toast } from "react-toastify";
 import { createPortal } from "react-dom";
function EditProductModal({

    open,
    product,
    onClose,
    updatePickleFunction,
    config,
    dispatch,
    updateProductItem

}) {

    const [formData, setFormData] = useState({

        productName: "",

        ProductId: "",

        ProductPrice: "",

        PickleDiscount: "",

        PickleCateogry: "",

        ProductDescription: "",

        images: []

    });

    console.log("edit modal",formData);

    // Load selected product into form
    useEffect(() => {

        if (product) {


            console.log("inside edit product",product);
            setFormData({

                productName: product.productName,

                ProductId: product.ProductId,

                ProductPrice: product.ProductPrice,

                PickleDiscount: product.PickleDiscount,

                PickleCateogry: product.PickleCateogry,

                ProductDescription: product.ProductDescription,

                images: []

            });

        }

    }, [product]);

    function inputHandler(e) {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value

        }));

    }

    function imageHandler(e) {

        setFormData(prev => ({

            ...prev,

            images: Array.from(e.target.files)

        }));

    }

    async function updateHandler(e) {

        e.preventDefault();

        try {

            const data = new FormData();

            data.append("productName", formData.productName);

            data.append("ProductId", formData.ProductId);

            data.append("ProductPrice", formData.ProductPrice);

            data.append("PickleDiscount", formData.PickleDiscount);

            data.append("PickleCateogry", formData.PickleCateogry);

            data.append("ProductDescription", formData.ProductDescription);

            formData.images.forEach(file => {

                data.append("pickleImage", file);

            });

            console.log("formdata",data);

            //const url = `http://localhost:5000/product/updatepickle/${product._id}`;
             const url=`https://backend-telugu-inti-pachalu.onrender.com/product/updatepickle/${product._id}`;

            console.log("formdata 22",data);

            const updatedProduct = await updatePickleFunction(

                url,

                data,

                config

            );

            dispatch(

                updateProductItem(updatedProduct.data)

            );

         toast.success('edited sucessfully', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
// transition: Bounce,
});

            onClose();

        } catch (error) {

            console.log(error);
                     toast.error('session Expired,login again', {
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

    if (!open) return null;

    return createPortal(

        <div className={styles.modalOverlay}>

            <div className={styles.modal}>

                <h2 id={styles.editTitleButton}>Edit Product</h2>

                <form onSubmit={updateHandler}  className={styles.editContainerCss}>

                    <input

                        name="productName"

                        value={formData.productName}

                        onChange={inputHandler}

                        placeholder="Product Name"

                        className={styles.editFormChildDesign}

                    />

                    <input

                        name="ProductId"

                        value={formData.ProductId}

                        onChange={inputHandler}

                        placeholder="Product Id"
                         className={styles.editFormChildDesign}
                    />

                    <input

                        name="ProductPrice"

                        value={formData.ProductPrice}

                        onChange={inputHandler}

                        placeholder="Price"
                        className={styles.editFormChildDesign}

                    />

                    <input

                        name="PickleDiscount"

                        value={formData.PickleDiscount}

                        onChange={inputHandler}

                        placeholder="Discount"
                        className={styles.editFormChildDesign}

                    />

                    <input

                        name="PickleCateogry"

                        value={formData.PickleCateogry}

                        onChange={inputHandler}

                        placeholder="Category"
                        className={styles.editFormChildDesign}

                    />

                    <textarea

                        name="ProductDescription"

                        value={formData.ProductDescription}

                        onChange={inputHandler}

                        placeholder="Description"
                        className={styles.editFormChildDesign}

                    />

                    <input

                        type="file"

                        multiple

                        onChange={imageHandler}
                        className={styles.editFormChildDesign}

                    />

                    <br />
                    <div className={styles.editButtonContainer}>

                    <button type="submit"    className={styles.editUpdateButton}>

                        Update Product

                    </button>

                    <button

                        type="button"

                        onClick={onClose}
                         className={styles.editCloseButton}
                    >

                        Cancel

                    </button>
                   </div>
                </form>

            </div>

        </div>,document.body

    );

}

export default EditProductModal;











































