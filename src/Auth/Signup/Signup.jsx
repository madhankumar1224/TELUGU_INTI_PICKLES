import { Link } from "react-router-dom";
import axios from "axios";
//import Logo from '../../assets/kolam3-remove-bg.png';
import Logo from '../../assets/muggu2.png';
//import PhoneInput from 'react-phone-input-2';
import bgImgLogo from '../../assets/ceramic_pickle_pot-removebg.png';
import 'react-international-phone/style.css';
import 'react-phone-input-2/lib/style.css';

import { useEffect, useState } from "react";
// import * as PhoneInputModule from 'react-phone-input-2';

// const PhoneInput = PhoneInputModule.default.default;

//import PhoneInput from "react-phone-input-2";
import { PhoneNumberUtil } from 'google-libphonenumber';

import { PhoneInput ,  defaultCountries,parseCountry} from 'react-international-phone';


import * as EmailValidator from 'email-validator';
import './Signup.css';

import UserFetch from "../../APIS/userFetch";
import { useCheck } from "../../APIS/useCheck";



const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};





 //const url = "http://localhost:5000/user/signup";
 const url="https://backend-telugu-inti-pachalu.onrender.com/user/signup"

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};









function Signup(){


const [passwordErrorMessage,setPasswordErrorMessage]=useState({
  PasswordErrors:{
         passwordError:false,
        passwordStatus:"Atleast 8 characters,1 number,1 special character",
       },
        ConfirmPasswordErrors:{
              confirmPasswordError:false,
              confirmPasswordStatus:{
              success:"password Matched",
              failure:"password did not matched"
      }
    }
  

});
    const [formData,setFormData]=useState({

        fullName:'',
        emailAddress:'',
        phoneNumber:'',
        desiredName:'',
        MyPassword:'',
        confirmPassword:'',
        storeName:'',
        countryPhoneCode:''

    });
   




  const {executeFunction,data}=useCheck(url,config);



    console.log("formData:",formData);
    //const [phone, setPhone] = useState('');




  const isValid = isPhoneValid(formData.phoneNumber);



    const [toggle,setToggle]=useState(true);
    const [confirmPasswordToggle,setConfirmPasswordToggle]=useState(true);
    const [emailvalid,setEmailvalid]=useState('');

    const [submitformIncomplete,setSubmitFormIncomplete]=useState(true);



const countries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return ['us', 'ua', 'gb','in','de','ch'].includes(iso2);
});

function changeHandler(event){
    console.log("event:",event);
    console.log("event.target:",event.target);

    const {name,value}=event.target;
console.log("event.data:",event.data);
console.log("event.name:",event.name);
console.log("event.value",event.value);
setFormData((data)=>({
   // console.log("data:",data);
      ...data,[name]:value

}));

console.log("formData:0",formData);




}






useEffect(()=>{

  
let myCreatedPassword=formData.MyPassword;

if(myCreatedPassword.trim().length >=1){

  let isPasswordSafe=passwordChecker(myCreatedPassword);
  console.log("isPasswordSafe",isPasswordSafe);

}
console.log("mycreatedPassword  inside useEffect:",myCreatedPassword);





if(formData.confirmPassword.length>=1){ 
 if( formData.confirmPassword==formData.MyPassword){
  setPasswordErrorMessage((prev)=>({  
    ...prev,ConfirmPasswordErrors:{
        ...prev.ConfirmPasswordErrors,confirmPasswordError:true
    }
  })
)
 }else{
    setPasswordErrorMessage((prev)=>({
    ...prev,ConfirmPasswordErrors:{
        ...prev.ConfirmPasswordErrors,confirmPasswordError:false
    }
  })
)
 }
}



console.log("mycreated confirmed Password  inside useEffect:",formData.confirmPassword);





if(formData.emailAddress.length>=1){
 let emailValid=EmailValidator.validate(formData.emailAddress);
 console.log("emailValid",emailValid);
setEmailvalid(emailValid)
}

},[formData.MyPassword,formData.confirmPassword,formData.emailAddress])










function passwordChecker(passwordtyped){

  const passwordPattern = /^(?=(?:.*[A-Z]){1})(?!.*[A-Z].*[A-Z])[A-Za-z0-9]{8,20}$/;
  let passwordChecking=passwordtyped;
  if (passwordPattern.test(passwordChecking)) {
  console.log("Valid input!");
setPasswordErrorMessage((prev)=>({
    ...prev,PasswordErrors:{
      ...prev.PasswordErrors,passwordError:false
    }
  }));

  console.log("password  inside checker :",passwordErrorMessage);
} else {
  console.log("Invalid input!");

  setPasswordErrorMessage((prev)=>({
    ...prev,PasswordErrors:{
       ...prev.PasswordErrors,passwordError:true
    }
  }));

  
  console.log("password  inside checker2 :",passwordErrorMessage);
}

}


function PasswordtoggleHandler(event){
  event.preventDefault();
  setToggle(!toggle);
}

function confirmPasswordToggleHandler(event){
  event.preventDefault();
  setConfirmPasswordToggle(!confirmPasswordToggle);
}


 function submitHandler(event){
event.preventDefault();
console.log("formdata submit",formData);

executeFunction(formData);
// console.log("signup response today",response.data);
   
  // console.log("user data",data);

 
}


  const hasStartedTypingConfirm = formData.confirmPassword.length > 0;
 const hasPasswordStartedTyping=formData.MyPassword.length>0;


const {passwordError,passwordStatus}=passwordErrorMessage.PasswordErrors;
const { ConfirmPasswordErrors}=passwordErrorMessage;
//console.log("success:",success);
const {confirmPasswordStatus,confirmPasswordError}=ConfirmPasswordErrors;
 const {success,failure}=confirmPasswordStatus;
console.log("success:",success);
console.log("password  outside checker ............ :",passwordErrorMessage);






useEffect(() => {
  console.log("Checking form validity inside useEffect");
 // Destructure for readability
  const isPasswordSafe = passwordErrorMessage.PasswordErrors.passwordError === false; 
  const isConfirmMatch = passwordErrorMessage.ConfirmPasswordErrors.confirmPasswordError === true; 

  console.log("isSafe",isPasswordSafe);

  console.log("isConfirmMatch",isConfirmMatch);
  const isValid = 
    formData.fullName.trim().length >= 1 && 
    emailvalid === true && 
    formData.phoneNumber.trim().length >= 1 && 
    formData.desiredName.trim().length >= 1&& isPasswordSafe && 
    isConfirmMatch;
  console.log("isvalid inside useEffect",isValid);
  if (isValid) {
    setSubmitFormIncomplete(false); // Enable button
  } else {
    setSubmitFormIncomplete(true);  // Keep/Lock button disabled
  }

}, [
  formData.fullName, 
  formData.emailAddress, 
  formData.phoneNumber, 
  formData.desiredName,
  emailvalid, 
  passwordErrorMessage.PasswordErrors.passwordError,
  passwordErrorMessage.ConfirmPasswordErrors.confirmPasswordError
]);












    return (
        <>
         <div className="MainSignupPage">
          <div className="CompanyLogo">
            <img src={Logo} alt="logo"  />
            <p id="companyTitleCss">TELUGU PICKLES</p>
              <img src={bgImgLogo} alt="bgImgLogo" className="ImageBackgroundCss"  style={{width:"70%",height:'60%'}}/>
          </div>
           
       
            <form onSubmit={submitHandler}>
              <div  className="formBox">
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={changeHandler}   maxLength={30} required autoComplete="off" placeholder="Full Name"/>
              <div className="emailContainerCssClass">
            <input type="text" id="email"   name="emailAddress"  value={formData.emailAddress} onChange={changeHandler}  placeholder="Email Address"/>
            {formData.emailAddress.length>=1 &&(emailvalid?<i className="bi bi-patch-check-fill" id="customCheckFill"></i>:<i className="bi bi-x-circle-fill" id="customCrossFill"></i>)}


           
         </div>



<div className="phoneContainerClassCss">

<PhoneInput
  defaultCountry='in'
  value={formData.phoneNumber}
   countries={countries}
   disableDialCodeAndPrefix={false}
autoComplete="off"
  onChange={(phone) =>
    setFormData((prev) => ({
      ...prev,
      phoneNumber: phone
    }))

        
  }
//  style={{borderColor:"red"}}
 style={{ 
    width: '100%' 
   
  }}
  inputStyle={{width:"100%",borderColor:"#DAA520",borderRadius:'0px' }}

  countrySelectorStyleProps={{
   buttonStyle:{borderColor:"#DAA520",marginRight:"10px",paddingLeft:"7px",borderRadius:'0px'},
   dropdownStyleProps:{
 style:{outlineColor:"#DAA520"}, listItemStyle:{borderColor:"#DAA520"},listItemCountryNameStyle:{color:"#DAA520"},
 preferredListDividerStyle:{backgroundColor:"#800"},listItemDialCodeStyle:{color:'#800020'}

   }
  
   
   }}
/>
      {(!isValid &&formData.phoneNumber.length>4) && <p id="displayPhoneErrorClass" style={{ color: '#800020' }}>Phone is not valid</p>}





</div>





           {/*<input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber} onChange={changeHandler} placeholder="phone number" /> */ }
            <input type="text" id="DesiredName" name="desiredName" value={formData.desiredName} onChange={changeHandler}  maxLength={15} autoComplete="off" placeholder="DesiredName"/>
              <div className="passwordContainerClass">
              {toggle?<i className="bi bi-eye-fill passwordEyeCss" onClick={PasswordtoggleHandler}></i>:<i className="bi bi-eye-slash-fill passwordEyeCss" onClick={PasswordtoggleHandler}></i>}
            <input type={toggle?"password":"text"} id="password" name="MyPassword" className="inputCssClasss"  value={formData.MyPassword}  onChange={changeHandler}  maxLength={20} autoComplete="off" placeholder="password" />
              
              {hasPasswordStartedTyping&&(passwordError?<p className="displayPasswordErrorCss">{`${passwordStatus}`}</p>:<p style={{display:"none"}} className="displayPasswordErrorCss"></p>)}
              
              </div>
            {/* {hasPasswordStartedTyping&&(passwordError?<p className="displayPasswordErrorCss">{`${passwordStatus}`}</p>:<p style={{display:"none"}} className="displayPasswordErrorCss"></p>)}  */}

           
            <div  className="passwordContainerClass confirmPasswordContainerClass">
            {confirmPasswordToggle?<i className="bi bi-eye-fill passwordEyeCss" onClick={confirmPasswordToggleHandler}></i>:<i className="bi bi-eye-slash-fill passwordEyeCss" onClick={confirmPasswordToggleHandler}></i>}

            <input type={confirmPasswordToggle?"password":"text"} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} maxLength={20}  autoComplete="off" placeholder="confirm password" />
                     
            {formData.confirmPassword.length>0 && (confirmPasswordError ? <p className="displayPasswordErrorCss" id="displayconfirmPasswordSuccessCss">{success}</p>:<p className="displayPasswordErrorCss">{failure}</p>)}

                     
                     </div>
               {/* {formData.confirmPassword.length>0 && (confirmPasswordError ? <p className="displayPasswordErrorCss">{success}</p>:<p className="displayPasswordErrorCss">{failure}</p>)} */}
              
              
               {/* <button onClick={PasswordtoggleHandler}>password visible</button> */}
             {/* {confirmPasswordToggle?<i className="bi bi-eye" onClick={confirmPasswordToggleHandler}></i>:<i className="bi bi-eye-slash" onClick={confirmPasswordToggleHandler}></i>} */}

      
            <input type="text"  id="Bussiness" name='storeName' onChange={changeHandler} value={formData.storeName} maxLength={10} autoComplete="off" placeholder="Bussiness/store name (optional)" />
            <button type="submit"  disabled={submitformIncomplete} className="formSubmitButton">Create Account</button>
        <  footer className="formBox-2">
          <p >Already have an account?</p>
           <Link to="/login"  className="loginLinkCss" >LogIn</Link>
           <Link to="/"  className="loginLinkCss" >home</Link>
         </footer>

 

</div>

</form>
        
          {/* <div> */}
            <img src={Logo} alt="altImgLogo" style={{width:'75px',height:'75px',mixBlendMode:"multiply"}} className="designEdgeLogo_1"/>
                        <img src={Logo} alt="altImgLogo" style={{width:'75px',height:'95px',mixBlendMode:'multiply'}} className="designEdgeLogo_2"/>

            <img src={Logo} alt="altImgLogo" style={{width:'75px',height:'75px',mixBlendMode:'multiply'}} className="designEdgeLogo_3"/>

            <img src={Logo} alt="altImgLogo" style={{width:'75px',height:'75px',mixBlendMode:'multiply'}} className="designEdgeLogo_4"/>

          {/* </div> */}
         </div>
       {/* <footer>
        <p>Already have an account</p>
        <Link to="/login" >LOGIN</Link>
         <Link to="/" >home</Link>
         </footer> */}
        </>

        
    )

  }
export default Signup;
