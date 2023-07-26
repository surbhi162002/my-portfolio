import { motion } from 'framer-motion'
import { astro, planet } from "../../assets"


const PlanetCanvas = () => {
  return (

    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [20, -20, 20], // Move the element up and down using an array of y-axis values
        transition: {
          duration: 1.5, // Duration of each animation loop (in seconds)
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "reverse", // Reverse the animation after each loop
        }}}
        >
        <div className="relative h-[900px] gap-20 w-[500px]">
          <img src={planet} alt="planet" className='invisible lg:visible xl:visible  absolute inset-y-0 left-[122px] invisible lg:visible h-[500px] w-[500px]'/>
          <img src={astro}  alt="astro " className='invisible lg:visible xl:visible  absolute inset-y-[450px] left-[122px] invisible lg:visible h-[450px] w-[450px]'/>
        </div>

  
    </motion.div>

  )
}

export default PlanetCanvas