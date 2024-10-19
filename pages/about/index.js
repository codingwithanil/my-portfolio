import { useState } from 'react';
import Classes from '../about/about.module.css';
// icons 
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

// components
import Avatar from '../../components/Avatar';
import Circle from '../../components/Circle';

//framer motion 
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

export const aboutData = [
  {title: 'Skills', 
    info:[{title:'Web Developer', 
    icons:[<FaHtml5/>,<FaCss3/>,<FaReact/>,<FaWordpress/>,<FaFigma/>]},
    { title: 'UI/UX Design',
      icons:[<SiNextdotjs/>, <SiFramer/>,<SiAdobexd/>, <SiAdobephotoshop/>],
    }],
  },
  {title: 'Awards', info:[{title:'Webby Awards - 2011-2012'}]},
  {title: 'Experience', info:[{title:'UI/UX Designer - 2012-2023'}]},
  {title: 'Credentials',info:[{title:'Web Development - AbC Univercity 2011',},{title:'Computer Science Diploma - AV Technical Univercity 2009'}]},
];

const About = () => {
 const [index, setIndex] = useState(0)
 console.log(index)
  return (
    <div className={Classes.aboutContainer}>
      <Circle/>
      {/* avatar img */}
      <motion.div
       variants={fadeIn('right', 0.2)}
       initial='hidden'
       animate='show'
       exit='hidden'
       className={Classes.avatarimg}
      >
        <Avatar/>
      </motion.div>
      <div className={Classes.titleContainer}>
        <div className={Classes.textinf}>
          {/* text */}
          <motion.h2 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={Classes.h2}>
            Captivating <span className={Classes.textcolor}>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={Classes.paragraph}>
            10 years ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* Counters */}
          <div>Counters</div>
        </div>
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className={Classes.aboutDatawrap}>
           {/* Aboutdata */}
          <div className={Classes.titlewraper}>
            {aboutData.map((item, itemIndex) => {
              return(
                <div
                 key={itemIndex}
                 className={`${index === itemIndex && Classes.titleline} ${Classes.titletwo}`}
                 onClick={() => setIndex(itemIndex)}
                >{item.title}</div>
              )
            })}
          </div>
          {/* about data */}
          <div className={Classes.details}>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div 
                  key={itemIndex}
                  className={Classes.detailstwo}
                >
                  {/* {title} */}
                  <div className={Classes.detailsthree}>{item.title}</div>
                  <div className={Classes.dash}>-</div>
                  <div className={Classes.iconwraper}>
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) =>
                     {
                      return <div  key={itemIndex} className={Classes.icon}>{icon}</div>;
                     })
                    }
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  ) 
};

export default About;
