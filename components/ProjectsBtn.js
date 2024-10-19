import Image from 'next/image'

import classes from '../components/ProjectsBtn.module.css';

// next link
import Link from 'next/link';

// icons
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div>
      <Link 
        href={'/work'}
        className={classes.imglink}>
        <Image 
          className={classes.image}
          src={'/rounded-text.png'} 
          width={141} 
          height={148} 
          alt=''
        />
       <HiArrowRight className={classes.arrow}/>
      </Link>
    </div>
  )
}

export default ProjectsBtn;
