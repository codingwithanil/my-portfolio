// testimonial data
import classes from '../components/TestimonialSlider.module.css';
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import {Navigation,Pagination} from 'swiper/modules'; 

// icons
import{FaQuoteLeft} from 'react-icons/fa'

//Image
import Image from 'next/image'

const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      pagination={{
      clickable:true,
      }}
      modules={[Navigation,Pagination]}
      className={classes.slider}
    >
     {testimonialData.map((person, index) => {
      return (
       <SwiperSlide key={index}>
         <div className={classes.swiperslidemain}>
           {/* avatar name */}
           <div className={classes.persondetailwrapper}>
              <div className={classes.persondetail}>
                {/* avatar */}
                <div className={classes.personavatar}>
                  <Image src={person.image} width={100} height={100} alt=''/>
                </div>
                {/* name */}
                <div className={classes.personname}>{person.name}</div>
                {/* position */}
                <div className={classes.position}>{person.position}</div>
              </div>
            </div>
            {/* quote & message */}
            <div className={classes.quotewrapper}>
              {/* quote icon */}
              <div className={classes.iconwrapper}>
                <FaQuoteLeft className={classes.icon}/>
              </div>
              {/* message */}
              <div className={classes.text}>{person.message}</div>
            </div>
         </div>
       </SwiperSlide>
   )})}
 </Swiper>
  )
};

export default TestimonialSlider;
