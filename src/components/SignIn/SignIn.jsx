import React from "react";
import { UserAuth } from '../../context/AuthProvider';

import logo from "../../assets/img/logo.jpg";

import classes from "./SignIn.module.scss";

const Signin = () => {
  const { user } = UserAuth();

  return (
    <div className={classes.wrap}>
      <img className={classes.logo} src={logo} alt="logo" />
      <h1 className={classes.title}>
        {user ? "You are already logged in. To log out, use the button above" : "Sign in with your Google account"}
      </h1>
    </div>
  );
};

export default Signin;
