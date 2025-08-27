import React from 'react'
import { Html,useProgress } from '@react-three/drei'
import { html } from '../assets'

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
     
      {progress}
    </Html>
  )
}

export default Loader