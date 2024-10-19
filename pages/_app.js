//componenet
import '../styles/globals.css';

//component
import Layout from '../components/Layout';
import Transition from '../components/Transition';

//router
import { useRouter } from 'next/router';

//framer motion
import {AnimatePresence, motion} from 'framer-motion';

//app.ts

function MyApp({ Component, pageProps }){
  const router = useRouter();
  return ( 
  <Layout> 
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className={motion}>
        <Transition/>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>
  )
};



export default MyApp;