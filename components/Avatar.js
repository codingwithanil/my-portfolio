// next image
import Image from 'next/image';


const Avatar = () => {
  return (
    <div >
       <Image
       src={'/avatar-.png'}
       width={600}
       height={600}
       alt=''
       />
    </div>
  )
}

export default Avatar;
