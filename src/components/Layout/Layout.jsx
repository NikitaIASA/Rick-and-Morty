import classes from './Layout.module.scss';

const Layout = ({ children }) => (
  <main className={classes.main}>
    {children}
  </main>
);

export default Layout;