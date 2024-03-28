import { BrowserRouter } from 'react-router-dom'
import {Navbar,Hero,About,Experience,Tech,Feedbacks,Contact,StarsCanvas, ComingSoon} from './components'

const App = () =>{
 

  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          {/* <About/>
          <Experience/>
          <Tech/>
          <Feedbacks/>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div> */}
          <ComingSoon/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
  