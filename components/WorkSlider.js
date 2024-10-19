// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import {Swiper, SwiperSlide} from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper/modules'; 

// css
import classes from '../components/WorkSlider.module.css'

//icons
import {BsArrowRight} from 'react-icons/bs'
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper 
       spaceBetween={15}
       pagination={{
        clickable:true,
       }}
       modules={[Pagination]}
       className={classes.slider}
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={classes.swiperimage}>
              {slide.images.map((image,index) => {
                return (
                  <div key={index} className={classes.swiperimagetwo}>
                    <div className={classes.swiperimagethree}>
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/* overlay gradient */}
                      <div className={classes.overlay}>
                       <div className={classes.textcontainer}>
                         <div className={classes.textwrapper}>
                           <div className={classes.text}>LIVE</div>
                           <div>PROJECT</div>
                          <div><BsArrowRight/></div>
                        </div>  
                      </div>
                      </div>
                      {/* title */}
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
      )})}
    </Swiper>
  );
};

export default WorkSlider;
