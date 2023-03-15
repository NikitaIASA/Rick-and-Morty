import React from 'react';
// import { GoogleButton } from 'react-google-button';
// import { UserAuth } from '../../context/AuthProvider';
import { useSnackbar } from 'notistack';

import logo from '../../assets/img/logo.jpg';

import classes from './SignIn.module.scss';

const Signin = () => {
  // const { enqueueSnackbar } = useSnackbar();
  // const { googleSignIn } = UserAuth();

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //     enqueueSnackbar("Login success", {variant: 'success'});
  //   } catch (error) {
  //     enqueueSnackbar("Login error", {variant: 'error'});
  //   }
  // };

  return (
    <div className={classes.wrap}>
      <img src={logo} alt="logo"/>
      <h1 className={classes.title}>Sign in with your Google account</h1>
      {/* <GoogleButton onClick={handleGoogleSignIn} /> */}
    </div>
  );
};

export default Signin;