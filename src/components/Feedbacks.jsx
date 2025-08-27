import React from 'react'
import { motion, spring } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../Hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbacksCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div viewport={fadeIn("", spring, index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-ful border-2  shadow-lg shadow-blue-200 '>
      <p className='text-white font-black text-2xl'>"</p>
    <p className='text-white tracking-wider text-xl'>{testimonial}</p>
    <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p>
            <span>@</span>
          </p>
          <p>
            {designation}
          </p>
        </div>
        <img src={image} alt="ok" 
        className='w-10 h-10 rounded-full object-cover' />
    </div>
  </motion.div>

)

const Feedbacks = () => {
  return (

    <div className='mt-12  bg-black-100 rounded-[20px] border-2 border-green-400 shadow-lg shadow-red-500  '>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]  `}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>WHAT OTHER SAY</p>
          <h2 className={styles.heroHeadText}>Testimonails</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbacksCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>



    </div>
  )
}

export default SectionWrapper(Feedbacks,"feed")