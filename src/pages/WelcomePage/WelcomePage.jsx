import React from "react";
import "./WelcomePage.scss";
import WelcomeImage from "../../assets/images/Background-img-welcome.svg";
import Logo from "../../assets/images/logo black.svg";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import Button from "../../components/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const getUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(!errorMessage);
      });
  };

  const hideError = () => {
    setErrorMessage(!errorMessage);
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
          <Button
            name="Login"
            image={false}
            variant="yellowWide"
            onClick={getUser}
          />
        </div>
      </div>
      <img
        src={WelcomeImage}
        className="picture-main"
        alt="blurry image of a class"
      />
      <div>
        {errorMessage && (
          <div className="displayMessage">
            <h1 className="heading">
              ❌Please enter a valid email and password!
            </h1>
            <button onClick={hideError}>Try again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
