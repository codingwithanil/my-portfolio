import classes from '../testimonials/testimonials.module.css';

//components 
import TestimonialSlider from '../../components/TestimonialSlider';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <motion.h2 
         variants={fadeIn('up', 0.2)}
         initial='hidden'
         animate='show'
         exit='hidden' 
         className={classes.h2}>
           What clients <span className={classes.text}>say</span>
        </motion.h2>
        <motion.div 
          className={classes.testimonialslider}
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'>
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  ) 
};

export default Testimonials;
