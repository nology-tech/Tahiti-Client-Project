import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Logo from "../../assets/images/logo black.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const getUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setUser(user);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log("this isnt working", error);
        alert("this isnt working!");
      });
  };

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
          <LoginForm
            password={password}
            email={email}
            emailInput={setEmail}
            passwordInput={setPassword}
          />
          <button onClick={getUser}>Log in</button>
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
