import AppBar from "../AppBar";
import { Outlet } from "react-router-dom";

import classes from "./Layout.module.scss";

const Layout = () => (
  <>
    <main className={classes.main}>
      <AppBar />
      <Outlet />
    </main>
  </>
);

export default Layout;
