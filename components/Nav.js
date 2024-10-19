import classes from '../components/Nav.module.css';

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenter,
  HiEnvelope,
} from 'react-icons/hi2';

//nav data
export const navData = [
  {name: 'home', path: '/', icon:<HiHome/>},
  {name: 'about', path: '/about', icon:<HiUser/>},
  {name: 'service', path: '/service', icon:<HiRectangleGroup/>},
  {name: 'work', path: '/work', icon:<HiViewColumns/>},
  {name: 'testimonials', path: '/testimonials', icon:<HiChatBubbleBottomCenter/>},
  {name: 'contact', path: '/contact', icon:<HiEnvelope/>},
]

//Link
import Link from 'next/link';

//next router
import {useRouter} from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className={classes.wrapper}>
      <div className={classes.wrappertwo}>
        {navData.map((link,index)=> {
          return (
           <Link 
             href={link.path}
             key={index}
             className={` ${classes.texticonwrapper}`}>
             <div className={classes.text}>{link.name}</div>
             <div className={classes.icon}>{link.icon} </div>
           </Link>
           
          )
        })}
      </div> 
    </nav>
  );
};

export default Nav;
