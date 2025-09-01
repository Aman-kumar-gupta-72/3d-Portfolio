import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../Hoc'
import { slideIn } from '../utils/motion'


// template_ovfhj1f
// service_s8c2ix5
// Nuk0Vg-882vFlCxBq

const Contact = () => {
  const fromRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name,value}= e.target;
    setForm ({ ...form, [name]: value })
   }
  const HandleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true);

    emailjs.send(
  "service_s8c2ix5",         // Service ID
  "template_ovfhj1f",        // Template ID
  {
    from_name: form.name,
    to_name: "Aman Kumar",
    from_email: form.email,
    to_email: "ag86898138@gmail.com",
    message: form.message,
  },
  "Nuk0Vg-882vFlCxBq"        // Public Key (no space!)
)
      .then (()=>{
        setLoading(false);
        alert("Your messsage sent ");

        setForm({
          name:'',
          email:"",
          message:'',
        })
      },(error)=>{
        setLoading(false)
        console.log(error);
        alert('something went wrong')
        
      }
    )
   }
  return (
    <div className='xl:mt-8 xl:flex-row flex-col-reverse flex gap-8 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In touch</p>
        <h3 className={styles.sectionHeadText}>Contact. </h3>
        <form
          ref={fromRef}
          onSubmit={HandleSubmit}
          className='mt-7 flex flex-col gap-6'
        >
        <label className='flex flex-col'>
          <span className='text-wrap font-medium mb-4'> Your Name</span>
          <input type="text"
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Please Enter Your name'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium'/>
        </label>
        <label className='flex flex-col'>
          <span className='text-wrap font-medium mb-4 mt-2'> Email</span>
          <input type="text"
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Please Enter Your Email '
            className='bg-tertiary py-4 px-6 placeholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium'/>
        </label>
        <label className='flex flex-col'>
          <span className='text-wrap font-medium mb-4 mt-2'> Message</span>
          <textarea type="text"
            name='message'
            value={form.message}
            onChange={handleChange}
        
            placeholder='Please Enter your message'
            className=' bg-tertiary py-4 px-6 placeholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium'/>
        </label>
        <button 
        type='submit' 
        className='bg-tertiary py-3 px-8 outline-none w-fit text-white text-2xl  font-bold shadow-md shadow-primary rounded-xl  hover:shadow-inner hover:shadow-blue-500 '>
          {loading?"sending...":'Send' }
        </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', "tween",0.2,1)} className='xl:flex-1 xl:h-auto md:h=[550px] h-[300px]'>
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')