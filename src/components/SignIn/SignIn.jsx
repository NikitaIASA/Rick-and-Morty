import React from "react";
import { UserAuth } from '../../context/AuthProvider';
import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";

import classes from "./SignIn.module.scss";

const Signin = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  if (user) navigate('/profile');

  return (
    <div className={classes.wrap}>
      <img className={classes.logo} src={logo} alt="logo" />
      <h1 className={classes.title}>
        Sign in with your Google account
      </h1>
    </div>
  );
};

export default Signin;
