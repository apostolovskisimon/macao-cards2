import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import LoginComponent from "./Login/LoginComponent";
import RegisterComponent from "./Register/RegisterComponent";
import { useEffect } from "react";

const Register = (props: any) => {
  console.log("props", props);
  const history = useHistory();
  const [isLoginScreen, setIsLoginScreen] = useState<boolean>(true);

  const isLoggedIn = localStorage.getItem("loggedin");

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     history.push("/");
  //   }
  // }, [isLoggedIn]);

  return (
    <div>
      {isLoginScreen ? <LoginComponent /> : <RegisterComponent />}

      <p>
        {isLoginScreen ? "Dont't have an account yet?" : "Already registered?"}
      </p>
      <button onClick={() => setIsLoginScreen(!isLoginScreen)}>
        Click here to {isLoginScreen ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Register;
