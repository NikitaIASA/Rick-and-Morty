import React from 'react';
import { UserAuth } from '../../context/AuthProvider';

import logo from '../../assets/img/logo.jpg';

import classes from './Profile.module.scss';

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className={classes.wrap}>
      <img src={logo} alt="logo"/>
      <h1>Welcome, {user?.displayName}</h1>
      <p>This is your profile!</p>
    </div>
  );
};

export default Account;