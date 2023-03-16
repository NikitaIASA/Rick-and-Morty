import React from "react";
import { GoogleButton } from 'react-google-button';
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

import { UserAuth } from '../../context/AuthProvider';
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

import classes from "./AppBar.module.scss";

const AppBar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user, logOut, googleSignIn } = UserAuth();;

  const handleSignOut = async () => {
    try {
      alert("Are you sure that you want to logout?");
      await logOut();
      enqueueSnackbar("You are logged out", {variant: 'success'});
    } catch (error) {
      enqueueSnackbar("Logout error", {variant: 'error'});
    }
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      enqueueSnackbar("Login error", {variant: 'error'});
    }
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <div className={classes.links}>
          <Link to="/">
            <AiOutlineHome size={36} />
          </Link>
          <Link to="/profile">
            <CgProfile size={36} />
          </Link>
        </div>
        {user ? (
          <Link to="/" className={classes.link} onClick={handleSignOut}>
            <BiLogOut size={36}/>
            <span>Log out</span>
          </Link>
        ) : (
          <GoogleButton className={classes.googleButton} onClick={handleSignIn} />
        )}
      </nav>
    </header>
  );
};

export default AppBar;
