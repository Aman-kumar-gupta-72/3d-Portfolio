import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion, scale } from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../Hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../style'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (



    <Tilt option={{ max: 45, scale: 1, speed: 450 }}
      className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
       
      >
        <div className='relative w-full h-[230px] '>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end mt-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center  items-center cursor-pointer'>
              <img src={github} alt="github"
                className='w-1/2 h-1/2' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h2 className="text-white text-2xl p-2 font-bold">{name}</h2>
          <p className="text-gray-400">{description}</p>

        </div>
        <div className='mt-4 flex flex-wrap g-2'>
         {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
         ))}
        </div>
      </motion.div>
    </Tilt>



  )
}


const Works = () => {
  return (

    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          What I have Done so far
        </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='w-full flex flex-'>
        <motion.p variants={fadeIn("", "", 0.1, 0.1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following project showcase my skills and experience through real world
          example of my work. Each projrct is briefy describe with links to code
          repositories and live demos in it. It reflects my ablity to solve complex problems,
          work with different technologies, and mangage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`} project={project} {...project} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "work")