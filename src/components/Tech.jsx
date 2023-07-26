import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { BallCanvas } from './canvas';


const Tech = () => {

  
  return (
    <div className='flex flex-row flex-wrap mt-24 justify-center gap-5  '>
      {technologies.map((technology) => (
        <div className='w-48 h-40' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>

  )
}

export default SectionWrapper(Tech,"");