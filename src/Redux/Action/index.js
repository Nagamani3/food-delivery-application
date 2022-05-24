import { toast } from "react-toastify";
import firebase from "../../Firebase";


//signup authentication
export let Createuser = (email,password) => {
  return async dispatch => {
    let userData = await firebase
      .auth()
      .createUserWithEmailAndPassword(email,password);
      userData.user.sendEmailVerification();
    dispatch({
      type: "CREATE_USER",
      payload: userData,
    });
  };
};


//login authentication
export let login = (email,password)=>{
  return async dispatch =>{
    let logindata= await firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    if(logindata.user.emailVerified === true){
      toast.success("successfully loggedin");
      dispatch({
        type: "LOGIN_USER",
        payload:logindata,
      });
    }else{

    }
  }
}

// google authentication
export let GoogleProvider = new firebase.auth.GoogleAuthProvider()
export let GoogleLogin = Provider =>{
  return async dispatch =>{
    let googlelogin = await firebase.auth().signInWithPopup(Provider)
    dispatch({
      type:"GOOGLE_LOGIN",
      payload:googlelogin
    })
  }
}

//phone authentication
export let PhoneNumber = (phone) => {
    return async dispatch => {
        let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container"
        );
        let PhoneAuth = await firebase.auth().signInWithPhoneNumber(phone, recaptchaContainer);
         let code = window.prompt("enter otp");
        PhoneAuth.confirm(code);
        
        dispatch({
            type: "Phone_Auth",
            payload : PhoneAuth
        })
    }
}

export let CartIncrement = (a,b) => {
  return async dispatch => {
   let CartAdd = a; 
   let add = b; 
    dispatch({
      type: "CARTINCREMENT",
      payload: CartAdd,
      val:add
    });
  };
};
export let CartDecrement = (a,b) => {
  return async dispatch => {
   let Cartdelete = a;  
   let remove=b;
    dispatch({
      type: "CARTDECREMENT",
      payload: Cartdelete,
cartval:remove,
    });
  };
};