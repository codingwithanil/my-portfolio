import classes from '../service/service.module.css';

//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circle from '../../components/Circle'

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Service = () => {
  return (
  <div className={classes.maincontainer}>
    <Circle/>
    <div className={classes.secondcontainer}>
      <div className={classes.servicecontainer}>
        {/* text */}
        <motion.h2 
          className={classes.H2}
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          >My services<span className={classes.text}>.</span></motion.h2>  
        <p className={classes.paragraph}>
          Coding & developing websites including static,customized
          and dynamic, following industry best practies
        </p>
      </div>
      <motion.div 
         className={classes.serviceslider}
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'>
          {/* sliders */}
         <ServiceSlider/>
      </motion.div>
    </div>
    <Bulb/>
  </div>
  )
}

export default Service;
