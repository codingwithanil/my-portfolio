import classes from '../components/Circle.module.css';
import Image from 'next/image'

const Circle = () => {
  return (
    <div className={classes.container} >
      <Image
      src={'/circles.png'}
      width={260}
      height={200}
      alt=''
      className={classes.imgcircle}
      />
    </div>
  )
}

export default Circle
