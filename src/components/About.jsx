import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion, scale} from "framer-motion"



import { styles } from '../style'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import SectionWrapper from '../Hoc/SectionWrapper'

const SrviceCard=({index,title,icon})=>{
  return (
    
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right","spring",0.5*index ,0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
         options = {{
          max:45,
          scale:1,
          speed: 450
         }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex  justify-evenly items-center flex-col'>
           <img src={icon} alt={title} 
           className='w-16 h-16 object-contain' />
           <h3 className='text-whitec text-2xl text-center font-bold'> {title}</h3>
        </div>

      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h1 className={styles.sectionHeadText}>Overview</h1>
  </motion.div>
  <motion.p variants={fadeIn()}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Hi, I’m <span className='text-4xl font-bold text-red-700'> Aman Kumar</span> , a skilled software developer with strong expertise in JavaScript and frameworks like React, Node.js, and Three.js. I’m a fast learner who loves turning complex challenges into simple, scalable, and user-friendly solutions. With a passion for building modern web applications, I collaborate closely with clients to deliver products that truly solve real-world problems. I’m always eager to explore new technologies, improve performance, and craft interactive experiences that stand out. 🚀 Let’s work together to bring your ideas to life!

  </motion.p>
  <div className='mt-20 flex flex-wrap gap-10'>
     {services.map((services,index)=>(
      <SrviceCard key={services.title} index={index} {...services}/>
     )
    )}
  </div>
  </>
  )
}

export default SectionWrapper(About,"about")