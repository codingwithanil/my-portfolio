import classes from '../components/Bulb.module.css';
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className={classes.Bulb}>
      <Image 
      src={'/bulb.png'}
      width={260}
      height={260}
      alt=''
      className={classes.Bulbimage}>
    </Image>
    </div>
  )
}

export default Bulb;
