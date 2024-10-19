//components
import Nav from '../components/Nav';
import Header from '../components/Header';
import classes from '../components/Layout.module.css';
import Topleft from '../components/Topleft';
const Layout = ({children}) => {
  return (
    <div className={classes.page}>
      <Topleft/>
      <Nav/>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
