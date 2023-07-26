import {rainbow} from "../../assets";
import { motion } from 'framer-motion'
import {pclouds} from "../../assets";
import {lclouds} from "../../assets";
import {whiteclouds} from "../../assets";
import { pastro } from "../../assets";


const Herobg = () => {
  return (
    <>
    <div className="App" style={{ overflow: "hidden", position: "relative", height: "100vh" }}>
        <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [20, -20, 20], // Move the element up and down using an array of y-axis values
          transition: {
            duration: 1.5, // Duration of each animation loop (in seconds)
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "reverse", // Reverse the animation after each loop
          },
        }}
>
   <img src={rainbow} alt='rainbow' className=' invisible lg:visible xl:visible transform -scale-x-100 rotate-3 absolute h-100 w-100 inset-y-20 right-8'></img>

   <img src={pclouds} alt='clouds'  className='invisible lg:visible absolute h-[180px] w-[180px] inset-y-[460px] left-[986px]'></img>
   <img src={pclouds} alt='clouds'  className='invisible lg:visible absolute h-[90px] w-[90px] inset-y-[420px] right-[76px]'></img>
   <img src={pclouds} alt='clouds'  className='invisible lg:visible absolute h-[120px] w-[120px] inset-y-[410px] left-[706px]'></img> 

    <img src={whiteclouds} alt='clouds'  className='invisible lg:visible absolute h-[100px] w-[120px] inset-y-20 right-[304px]'></img>
    <img src={whiteclouds} alt='clouds'  className='invisible lg:visible absolute h-[100px] w-[120px] inset-y-[300px] left-[584px]'></img>
    <img src={whiteclouds} alt='clouds'  className='invisible lg:visible absolute h-[140px] w-[140px] inset-y-[490px] right-[16px]'></img>
    


    <img src={lclouds} alt='clouds'  className='invisible lg:visible absolute h-[100px] w-[100px] inset-y-[510px] right-96'></img>
    <img src={lclouds} alt='clouds'  className='invisible lg:visible absolute h-[160px] w-[160px] inset-y-[70px] right-[30px]'></img>
    <img src={lclouds} alt='clouds'  className='invisible lg:visible absolute h-[200px] w-[200px] inset-y-[140px] left-[686px]'></img> 







</motion.div>



<motion.div
      initial={{ x: "50%", y: 70 }} // Initial position at the center of the left side of the screen
      animate={{
        x: ["50%", "-100%", "-250%"], // Zigzag animation with keyframes (left -> right -> right)
        y: [0, 100, 0, 100, 0], // Zigzag animation with keyframes (stay at the same y position)
        transition: {
          duration: 7, // Duration of the animation (in seconds)
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "loop", // Restart the animation from the initial position after each loop
        },
      }}
   >
            <img src={pastro} alt='astronaut'  className=' absolute h-[300px] w-[300px] inset-y-[240px] left-[600px]'></img> 

      </motion.div>




</div>


</>
   
)
}

export default Herobg




