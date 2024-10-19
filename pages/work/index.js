import classes from '../work/work.module.css';

//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circle from '../../components/Circle'

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const work = () => {
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
          >My Work<span className={classes.text}>.</span></motion.h2>  
        <p className={classes.paragraph}>
          Lorem ssidskdnskdsjd jdjdndnksdn sjns jsjs sjjssjs.
          sbsj cjs jsjsjsjjsjscjscjs sjsjsc jdbjwd wjjs jj
        </p>
      </div>
        <motion.div 
          className={classes.workslider}
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'>
          {/* sliders */}
          <WorkSlider/>
        </motion.div>
    </div>
    <Bulb/>
  </div>
  )
}

export default work;
