import Herobg from './canvas/Herobg';
import {motion} from 'framer-motion';
import { styles } from '../style';
import { cv, linkedin,github } from '../assets';




const Hero = () => { 
  return (
    <>

    <section className='relative w-full h-[450px] xl:h-screen  mx-auto'>

      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto 
      flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* slider */}
          <div className='w-5 h-5 rounded-full bg-secondary'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText}`}>
          <span> Hi, I'm Surbhi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[20px] text-[#03001C]`}>
            Welcome to my portfolio! <br/> I develop user interfaces, <br />
             and web applications
          </p>
          

         
        </div>
       

       </div>
       <Herobg/>
       

      {/* scroller */}
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[220px] mt-12 max-w-7xl mx-auto mr-6
      flex flex-row items-start gap-1 items-center`}>
        <a href='https://www.linkedin.com/in/surbhi-yadav-a407451ba/'  target="_blank">
       <img src={linkedin} alt="linkedin" className="h-[95px] w-[95px]"/> 
        </a>
        <a href='https://github.com/surbhi162002'  target="_blank">
        <img src={github} className="h-[45px] w-[45px]"></img>
        </a>
        <a  href='https://drive.google.com/file/d/1AHwwiGXUPqkDgOc1s9vn79CNZGOA4EHb/view?usp=sharing' target="_blank">
        <img src={cv} className="h-[90px] w-[100px]"></img>
        </a>
        <a href='#about'>
          <div className='w-[45px] h-[44px] rounded-xl border-4 border-tertiary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    

    </section>
    </>

  );
};

export default Hero;

