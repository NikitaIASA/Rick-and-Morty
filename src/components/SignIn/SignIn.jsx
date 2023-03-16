import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from '../../context/AuthProvider';
import logo from "../../assets/img/logo.jpg";

import classes from "./SignIn.module.scss";

const Signin = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
      navigate('/profile');
    }
  }, [user, navigate]);

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
