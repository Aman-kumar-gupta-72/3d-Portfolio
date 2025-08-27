import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvaLoader from "../Loader";
import { m } from 'framer-motion';

const Computers = ({isMobile}) => {
  const Computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={1}
        groundColor="gray" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20,60,10]}
      angle={0.20}
      penumbra={1}
      intensity={1}/>
      <primitive
        object={Computer.scene} 
        scale={isMobile?0.5:0.75}
        position={isMobile?[0,-3,,2.2]:[1,-3.15,-1.5]}
        />
    </mesh>


  );

};
const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
     const mediaQuary=window.matchMedia('(max-witdth:500px)')
     setIsMobile(mediaQuary.matches);
     const handleMediaQuary=(event)=>{
      setIsMobile(event.matches)
     };
     mediaQuary.addEventListener('change',handleMediaQuary);
     return ()=>{
      mediaQuary.removeEventListener('change',handleMediaQuary);
     }
  },[])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [25, 10, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvaLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}  />
      </Suspense>
    </Canvas>

  )
}
export default ComputerCanvas


