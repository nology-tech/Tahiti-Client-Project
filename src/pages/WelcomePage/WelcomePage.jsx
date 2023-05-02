import React from "react";
import "./WelcomePage.scss";
import Form from "../../Components/Form/Form";

const WelcomePage = () => {
  return (
    <div className="header-container">
      <h1>Welcome Back </h1>
      <p>
        Welcome to New You clinic where we provide world class beauty treatments
        that will make you look like you are 18 again!
      </p>
      <Form />
    </div>
  );
};
export default WelcomePage;
