import { motion } from 'framer-motion';
import {ball } from '../../assets';


const BallCanvas = ({index,title,icon}) => {
    return (
        <motion.div
     
        animate={{
          y: [0, -100, -50], // Hopping animation from 0 to -100 and back to 0 (you can adjust the values as needed)
        }}
        transition={{
          duration: 1, // Duration of the animation in seconds
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: 'reverse', // Reverse the animation on each repeat
        }}
           whileHover={{ scale: 1.2, rotate: 40 }}
           whileTap={{
             scale: 0.8,
             rotate: 40,
             borderRadius: "100%" }}
        >
        
        <div className='parent'>
          <img src={ball} className='image1 h-[154px] w-[154px] '/>
          <img src={icon} alt={title} className=' image2 w-[75px] h-[75px]' />
        </div>
          </motion.div>
  
    )
  }

export default BallCanvas

