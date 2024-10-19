import classes from '../components/Topleft.module.css';
import Image from 'next/image';


const Topleft = () => {
  return (
     <div>
       <Image 
         src='/top-left-img.png'
         width={500}
         height={400}
         priority
         alt=''
         className={classes.image}/>
    </div>
  )
}

export default Topleft;
