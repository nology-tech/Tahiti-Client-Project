import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Logo from "../../assets/images/logo black.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"
import { useState, useEffect } from "react";

const WelcomePage = ({email, password, submitForm, emailInput, passwordInput, userCredential}) => {

  const [user, setUser]=useState({})

  const getUser = (email, password)=> {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    setUser(userCredential.user)
    
    // ...
  })
  .catch((error) => {
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // ..
    console.log(error)
  });
  }

  useEffect(()=>{
    getUser("mbirchall@gmail.com", "nology123");
  },[])


  return (
    <div className="container">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="picture-logo" />
      </div>
      <div className="welcome-container">
        <div className="header-container">
          <h1>Welcome Back </h1>
          <p>
            Welcome to New You clinic where we provide world class beauty
            treatments that will make you look like you are 18 again!
          </p>
          <LoginForm password={password} email={email} emailInput={emailInput} passwordInput={passwordInput}/>
          <button onClick={submitForm}>Log in</button>
        </div>
      </div>

      <img
        src={WelcomeImage}
        className="picture-main"
        alt="blurry image of a class"
      />
      
    </div>
  );
};
export default WelcomePage;
