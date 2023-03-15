import React from "react";
import { UserAuth } from "../../context/AuthProvider";

import logo from "../../assets/img/logo.jpg";

import classes from "./Profile.module.scss";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className={classes.wrap}>
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes.greeting}>
        <h1>Welcome, {user?.displayName}</h1>
        <p className={classes.profile}>This is your profile!</p>
      </div>
    </div>
  );
};

export default Account;
