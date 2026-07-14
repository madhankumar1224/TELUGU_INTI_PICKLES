import { Link ,useNavigate} from "react-router-dom";
import imgLogo from '../../assets/muggu2.png';
import {  useEffect, useMemo, useReducer, useState } from "react";
import styles from './Login.module.css';
import ceramicPot from '../../assets/ceramic_pickle_pot-removebg.png';
import * as EmailValidator from 'email-validator';
import userFetch from "../../APIS/userFetch";
import { useCheck } from "../../APIS/useCheck";
import { useContext } from "react";


import AuthorContext from "../../AuthContext";
import ProtectedRoute from "../ProtectedRoute";

 //const url = "http://localhost:5000/user/login";
  const url="https://backend-telugu-inti-pachalu.onrender.com/user/login"

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

function Login(){


    const {setuserDetailsAndToken}=useContext(AuthorContext);

const [loginState,setLoginState]=useState({
 email:'',
 password:''   
})


const [passwordToggle,setPasswordToggle]=useState(true);
const [isEmailValid,setIsEmail]=useState(null);

//const [token,setToken]=useState('');

const {executeFunction,data,loginDetailsError}=useCheck(url,config);
function changeHandler(event){
 
   const {name,value}= event.target;
    setLoginState((prev)=>({
        ...prev,[name]:value
    }));

}

console.log("loginform dataaaa",loginState);

console.log(" use cheked login ::::dataaaaaa",data);
console.log("use chedked login error :::::",loginDetailsError);



const navigate = useNavigate();
useEffect(() => {

    if (data?.token && data?.role=='user') {

        setuserDetailsAndToken(data);
        navigate("/dashboard");
    }else if(data?.token && data?.role=='admin'){
       setuserDetailsAndToken(data);
        navigate("/admin");
    }
    
    // else{
    //      navigate("/login");
    // }

}, [data]);









useEffect(()=>{

if(loginState.email.length>=1){
 let emailValid=EmailValidator.validate(loginState.email);
  console.log("emailValid",emailValid);
setIsEmail(emailValid);
}

},[loginState.email]);






 function LoginSubmitHandler(event){
event.preventDefault();
//const loginFormDetails=loginState;
console.log("loginFormDetails",loginState);
try{
executeFunction(loginState);
 console.log("xx");



}catch(error){
    console.log("inside login handler",error);
}
 }




const loginPageCompanyLogo={
    Width: "150px",
height: "150px",
mixBlendMode:"Multiply"
}

    return (
        <>

        <div className={styles.CompanyMainCss}>
            <div className={styles.CompanyLoginChildCss}>
                <img src={imgLogo} alt="imageLogo"  className={styles.ImageLogo} />
                <p className={styles.companyTitleCss}>Telugu Pickles</p>
                <img src={ceramicPot} alt="picklesImage"  className={styles.ceramicPotCss} />
            </div>
        

         <section  className={styles.LoginPage}>
            <header>
               <img src={imgLogo} alt="imgLogo"  className="CompanyImage"  style={loginPageCompanyLogo} />
               <p className={styles.LoginTittle}>TELUGU PICKELS</p>
            </header>
            <form  className={styles.LoginformPage} onSubmit={LoginSubmitHandler}>
              <div className={styles.box}>
                 
                     <input type="email" name="email" value={loginState.email} placeholder="Email"  onChange={changeHandler} className={styles.InputClassCss}/>
                       <i className={`bi bi-envelope-fill ${styles.inputTypeIcon}`}></i>
                   {loginState.email.length>=1&&(isEmailValid?<i className="bi bi-patch-check-fill" id={styles.customLoginEmailCheckFill}></i>:<i className="bi bi-x-circle-fill" id={styles.customLoginEmailCrossFill}></i>)} 
         

               {loginState.email.length>=1&&(isEmailValid?<p>email is valid</p>:<p>email is invalid</p>)} 
              </div>

               <div className={styles.box}>
                 
               <input type={passwordToggle?"password":"text"} name="password" value={loginState.password} placeholder="password"  onChange={changeHandler} className={styles.InputClassCss}/>
               <i className={`bi bi-lock-fill ${styles.inputTypeIcon}`}></i>
                {passwordToggle?<i  onClick={()=>{setPasswordToggle(false)}} className={`bi bi-eye-slash-fill ${styles.loginPasswordEyevisibleToggleIcon}`}></i>:<i   onClick={()=>{setPasswordToggle(true)}}   className={`bi bi-eye-fill ${styles.loginPasswordEyevisibleToggleIcon}`}></i>}

                {loginDetailsError.isError && <p>{loginDetailsError.errorMessage}</p>}
                
              </div>

              <div className={`${styles.box} ${styles.forgetPasswordCss}`}>
            <div className={styles.checkboxGroup}>
                <input type="checkbox" id="vehicle1" name="vehicle1" />
                <label htmlFor="vehicle1">Remember Me</label>
                </div>
                <Link to="/"  className={styles.forgotLink}>ForgetPassword</Link>
               </div>
               
                <button type="submit" >Log in</button>
              
            </form>
            <footer className={styles.FooterGroupCss}>
              <div className={styles.lineDivider}>
             <span>our Media Partners</span>
              </div> 
<div className={styles.socialMediaIcons}>
    <i className="bi bi-facebook" id={styles.fbIcon}></i>
    <i className="bi bi-instagram" id={styles.instaIcon}></i>
    <i className="bi bi-whatsapp" id={styles.whatsappIcon}></i>
</div>
<div  className={styles.NavigatingLinksCss}>
    <p>Don't Have an Account?</p>
    <Link to="/Signup" className={styles.NavigatingSignupCss}>Signup</Link>
    <Link to="/"  id={styles.NavigatingHomeCss}>home</Link>
</div>
            </footer>
         </section>



       









<img src={imgLogo} alt="altImgLogo" style={{width:'75px',height:'75px',mixBlendMode:"multiply"}} className="designEdgeLogo_1"/>
                        <img src={imgLogo} alt="altImgLogo" style={{width:'75px',height:'95px',mixBlendMode:'multiply'}} className="designEdgeLogo_2"/>

            <img src={imgLogo} alt="altImgLogo" style={{width:'75px',height:'75px',mixBlendMode:'multiply'}} className="designEdgeLogo_3"/>

            <img src={imgLogo} alt="altImgLogo" style={{width:'75px',height:'75px',mixBlendMode:'multiply'}} className="designEdgeLogo_4"/>








</div>

        {/* <h1>Login page</h1> */}
         
        </>
    )
}
export default Login;