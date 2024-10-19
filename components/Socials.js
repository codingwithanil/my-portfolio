import classes from '../components/Socials.module.css';
import Link from 'next/link'

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterFill,
  RiLinkedinBoxFill
} from 'react-icons/ri';

const Socials = () => {
  return (
    <ul className={classes.wrapper}>
      <li className={`${classes.icon} ${classes.Youtube}`}>
        <span className={classes.tooltip}>Youtube</span>
        <Link href={''} className={classes.You}><RiYoutubeLine/></Link>
      </li>
      <li className={`${classes.icon} ${classes.Instagram}`}>
        <span className={classes.tooltip}>Instagram</span>
        <Link href={''} className={classes.Ins} ><RiInstagramLine/></Link>
      </li>
      <li className={`${classes.icon} ${classes.Facebook} `}> 
        <span className={classes.tooltip}>Facebook</span>
        <Link href={''} className={classes.Face} ><RiFacebookLine/></Link>
      </li>
      <li className={`${classes.icon} ${classes.Twitter}`}>
        <span className={classes.tooltip}>Twitter</span>
        <Link href={''} className={classes.Twi} ><RiTwitterFill/></Link>
      </li>
      <li className={`${classes.icon} ${classes.Linkdin}`}>
        <span className={classes.tooltip}>Linkdin</span>
        <Link href={''} className={classes.Link} ><RiLinkedinBoxFill/></Link>
      </li>
    </ul>
  )
}

export default Socials;
