import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn , textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right','spring',0.5*index,0.75)}
        className='w-full black-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ' 
          >
            <img src={icon} alt={title}
            className='object-contain h-40' />
            <h3 className='text-[#917FB3] text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
      <>
        <motion.div>
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
        </motion.div>
 
      <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-4 text-[#545461] text-[17px] max-w-3xl leading[30px] '
      >
        I'm a skilled web developer with experience in Javascript and frameworks like React,Node.js, Next.js.I am a quick learner and passionate about creating efficient, pleasing and user-friendly websites.Let's work together to bring your ideas to life !

      </motion.p>
      {/* //card */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')