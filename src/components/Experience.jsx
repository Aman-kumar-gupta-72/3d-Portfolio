import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../Hoc';
import { textVariant } from '../utils/motion';

 
const ExperienceCard = ({experiences})=>(
  
  <VerticalTimelineElement
   contentStyle={{background:"#1d1836", color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid #232631"}}

    date={experiences.date}
    iconStyle={{background: experiences.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experiences.icon} alt={experiences.company_name}
        className='w-[60%] h-[60] object-contain ' />
      </div>
    }
    >
     <div>
      <h3 className='text-white text-[24px] font-bold '>
        {experiences.title}
      </h3>
      <p className="text-secondary text-[16px] ">{experiences.company_name}</p>
     </div>
     <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experiences.points.map((point,index)=>(
        <li key={`experiences-point-${index}`}
        className='text-secondary text-[16px]'>
          {point}

        </li>
      ))}

     </ul>

  </VerticalTimelineElement>

)


const Experience = () => {
  return (
    <>
       <motion.div variants={textVariant}>
         <p className={styles.sectionSubText}>What I Have done so far</p>
         <h2 className={styles.sectionHeadText}>Work Experience</h2>
       </motion.div>
       <div className='mt-20 flex flex-col'>
          <VerticalTimeline  className="timeline-line">
            {experiences.map((experiences,index)=>(
              <ExperienceCard key={index} experiences={experiences}/>
            ))}
          </VerticalTimeline>
       </div>
       </>
  )
   
}

export default SectionWrapper(Experience,"work")