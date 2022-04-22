import './index.css'
import "swiper/css/bundle"

import { Switch, Route } from 'react-router-dom'

//IMPORT COMPONENTS
import { HeadTroduction, Header, XP, Timelines, Reviews, QA, ProjHeader, Formule, Footer, Projects, NavbarProjects, ReviewsEx, Slider } from './components'





function App() {


   return (
       <>
       <HeadTroduction />
       <Header />
       <ProjHeader />
       {/* <section className='projects-main'>
       <div className='projects-navbar'>  
        <NavbarProjects />
       </div>
       <div className='projects-main'>
        <Switch> 
       <Route exact path="/Projects.js" component={Projects} />
       <Route exact path="/ReviewsEx.js" component={ReviewsEx} />
       <Route exact path="/Slider.js" component={Slider} />
       </Switch>
       </div>
       </section> */}
       <XP />
       <Timelines />
       <QA />
       <Reviews />
       
       <Footer />
       </>

   )
}

export default App;
