// import swiper react component
import {Swiper, SwiperSlide} from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//icons
import {
 RxCrop,
 RxDesktop,
 RxPencil2,
 RxReader,
 RxRocket,
 RxArrowTopRight,
} from 'react-icons/rx';

//data
export const serviceData = [
  {
    icon:<RxCrop/>,
    title:'Launch & maintenance',
    description:'After buildin app, we can help you for a successful launch, we offer support and maintenance',
  },
  {
    icon:<RxPencil2/>,
    title:'Design',
    description:'Crafting a beautiful and user-friendly web solution with our design specialists',
  },
  {
    icon:<RxDesktop/>,
    title:'Development',
    description:'The UI developer, from their experience, then selects the most ideal framework',
  },
  {
    icon:<RxReader/>,
    title:'Front-End Development',
    description:'We ensure to offer user-centric experiences that resonate with your target audience',
  },
  {
    icon:<RxRocket/>,
    title:'Ecommerce Development',
    description:'We enable your business to establish a strong  online presence, fast growth in digital marketplace',
  }
];

//import required modules
import {FreeMode,Pagination} from 'swiper/modules';

// css
import classes from '../components/ServiceSlider.module.css'

const ServiceSlider = () => {
  
  return (
    <Swiper 
      breakpoints={{
        400:{
          sliderPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween:15,
        },
      }}
       freeMode={true}
       pagination={{
        clickable:true,
       }}
       modules={[FreeMode,Pagination]}
       className={classes.slider}
    >
      {serviceData.map((item, index) => {
        console.log(item)
        return (
          <SwiperSlide key={index}>
            <div className={classes.swiperslide}>
              {/* icon */}
              <div className= {classes.icon}>{item.icon}</div>
              {/* title & description */}
              <div className={classes.title}>{item.title}</div>
              <p className={classes.description}>{item.description}</p>
              {/* arrow */}
              <div className={classes.arrow}><RxArrowTopRight/></div>
            </div>
          </SwiperSlide>
      )})}
    </Swiper>
  );
};

export default ServiceSlider;
