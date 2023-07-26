/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { About , Contact , Experience ,Hero , Navbar , Tech , Works} from './components';

const App = () => { 

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <Navbar/>
          <Hero/>
         <About/>
         <Experience/>
         <Tech/>
         <Works/>
         {/* <div className='relative z-0'> */}
          <Contact/>
         {/* </div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
