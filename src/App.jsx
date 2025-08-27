 import { BrowserRouter } from "react-router-dom"

 import {About, Contact,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Experience} from "./components"
 import Galaxy from "./components/canvas/Galxay"

// Basic usage


function App() {
  

  return (
    <>
      <BrowserRouter>
       <div className="fixed inset-0 -z-10">
        <Galaxy
          mouseRepulsion={true}
          density={1.2}
          glowIntensity={0.5}
          hueShift={200}
          twinkleIntensity={0.4}
        />
      </div>
         <div className="relative z-1 bg-primary ">
           <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
              <Navbar/>
               <Hero/>
             </div>
          
         
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>
              
          </div>
        
         </div>
      </BrowserRouter>
    </>
    
  )
}

export default App
