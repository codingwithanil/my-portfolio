// classes
import classes from '../contact/contact.module.css'

//components
//import Circle from '../../components/Circle';

//icons
import {BsArrowRight} from 'react-icons/bs';

//frameer
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.maincontainertwo}>
        <div className={classes.maincontainerthree}>
          {/* text */}
          <motion.h2 
            className={classes.h2}
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            >Let's <span className={classes.colortext}>connect.</span></motion.h2>
          {/* form */}
          <motion.form 
          className={classes.formcontainer}
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          >
            <div className={classes.nameemailwrapper}>
              <input type='text' placeholder='Name' className={classes.name}/>
              <input type='text' placeholder='Email' className={classes.email}/>
            </div>
              <input type='text' placeholder='Subject' className={classes.subject}/>
              <textarea placeholder='Message' className={classes.textarea}></textarea>
              <button className={classes.buttonwrapper}>
                <div className={classes.textarrowrapper}>
                  <span className={classes.buttontext}>Let's talk</span>
                  <Link href={''} className= {classes.buttonarrow}><BsArrowRight /></Link>
                </div> 
              </button>
          </motion.form>
        </div>
      </div>  
    </div>
  )
};

export default Contact;
