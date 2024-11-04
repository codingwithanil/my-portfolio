// classes
import classes from '../contact/contact.module.css'

import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser' ;
import Swal from 'sweetalert2';
//components
//import Circle from '../../components/Circle';

//icons
import {BsArrowRight} from 'react-icons/bs';

//frameer
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import Link from 'next/link';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7grx4b', 'template_a92e61f', form.current, {
        publicKey: 'GZM1dyCRRh67BxnZb',
      })
      .then(
        (result) => {
         console.log(result.text)
        },
        (error) => {
          console.log(error.text)
         },
      );
      e.target.reset()
  };
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
          ref={form}
          onSubmit={sendEmail}
          >
            <div className={classes.nameemailwrapper}>
              <input type='text' placeholder='Name' name='user_name' required className={classes.name}/>
              <input type='text' placeholder='Email' name='user_email' required className={classes.email}/>
            </div>
              <input type='text' placeholder='Subject' name='subject' required className={classes.subject}/>
              <textarea placeholder='Message' name='message' required className={classes.textarea}></textarea>
              <button type="submit"  className={classes.buttonwrapper}>
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
