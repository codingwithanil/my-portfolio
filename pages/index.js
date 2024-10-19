import Image from 'next/image';
import backgroundImage from '../public/bg-explosion.png'
import classes  from "../pages/index.module.css"

// components
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
// import particlesContainer from '../components/particlesContainer';

//framer motion 
import {motion} from 'framer-motion'

// variants
import{fadeIn} from '../variants';

const Home = () => {
  return (
  <div className={classes.homecontainerone}>  
    <div className={classes.homecontainertwo}>
      <div className={classes.home}>
        {/*title  */}
        <motion.h1
         className={classes.title}
         variants={fadeIn('down', 0.2)}
         initial='hidden'
         animate='show'
         exit='hidden'
        >
          Transforming Ideas <br/> Into{' '}
          <span className={classes.text}>Digital Reality</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p 
         className={classes.subtitle}
         variants={fadeIn('down', 0.3)}
         initial='hidden'
         animate='show'
         exit='hidden'
        >
          I design and develop experiences tat make people's
          lives simpler through Web and Mobile apps.I work  
          Html, Css, Javascript, Reactjs, ReactNative and Nextjs
        </motion.p>
      </div>
       {/* btn */}
      <motion.div 
        className={classes.circle}
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        >
          <ProjectsBtn/>
      </motion.div>
    </div>
      {/* image */}
    <div className={classes.fixedbackground}>
      {/* background img */}
      <div className={classes.firebackground}>
        <Image
         src={backgroundImage}
         alt="backgroundimage"
         />
      </div>
        {/* Particles */}
        {/* <div><particlesContainer/></div> */}
        {/* Avatar */}
        <motion.div 
          className={classes.mainavatar}
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration:1, ease:'easeInOut'}}
        >
         <Avatar/>
        </motion.div>
      </div>
   </div> 
  )
}

export default Home;
