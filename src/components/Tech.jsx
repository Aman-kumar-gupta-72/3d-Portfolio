import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../Hoc'
import { technologies } from '../constants'
import { styles } from '../style'

const Tech = () => {
  return (
    <div>
      <p className={`${styles.heroHeadText}text-center`}>Skill</p>
    <div className='flex  flex-row flex-wrap justify-center g-10'>
 
      {technologies.map((technologies)=>(
        <div className='w-28 h-28' key={ technologies.name}>
             <BallCanvas icon={technologies.icon}/>
          </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper (Tech ,"tech")