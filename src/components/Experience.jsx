import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../style';
import { experiences} from '../constants';
import  { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (


  <VerticalTimelineElement
    contentStyle={{backgroundColor:'#fff', color:'#2A2F4F', boxShadow: '0px 35px 120px -15px #211e35',borderBottomColor:"#BA94D1" ,borderBottomWidth:"9px"}}
    contentArrowStyle={{ borderRight: '9px solid #fff'}}
    date={experience.date}
    iconStyle={{ background:'#383E56'}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src='/src/assets/icons.png'
          // alt={experience.company_name} 
          className='w-[80%] h-[80%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-[#03001C] text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-[#505551] text-[16px] font-bold' style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index) => (
        <li 
          key={`experience-point-${index}`}
          className="text-[#545461] font-semibold text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      )
        )}
    </ul>
    <div className = "h-2 w-2 border-secondary solid"></div>


</VerticalTimelineElement>

)


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experiences</h2>

      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline
          lineColor="#BA94D1"
        >
                  {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                  ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")