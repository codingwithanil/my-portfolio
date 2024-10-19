import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from 'next/dist/shared/lib/constants';
import classes from '../components/Header.module.css'

//components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <div className={classes.header}>
      <div  className={classes.name}>
        <h1 className={classes.content}>ANIL KUMAR</h1>
      </div>
      <div className={`${classes.name} ${classes.headerright}`}>
        <Socials/>
      </div>
    </div>
  )
}

export default Header;
