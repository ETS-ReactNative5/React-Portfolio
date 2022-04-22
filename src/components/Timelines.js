import PropTypes from 'prop-types'

//IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react"

//IMPORT SWIPER CSS
import "swiper/css"



//IMPORT PHOTOS
import pict0 from '../img/timeline-pict/campus.jpg'
import pict1 from '../img/timeline-pict/commudev.jpg'
import pict2 from '../img/timeline-pict/digitalcontent.jpg'
import pict3 from '../img/timeline-pict/eventcoordinator.jpg'
import pict4 from '../img/timeline-pict/iotaward.jpg'
import pict5 from '../img/timeline-pict/management.jpg'
import pict6 from '../img/timeline-pict/MMA.jpg'
import pict7 from '../img/timeline-pict/projectaward.jpg'
import pict9 from '../img/timeline-pict/webdev.jpg'
import pict10 from '../img/timeline-pict/ceo.png'
import { FaHryvnia } from 'react-icons/fa'






const Timelines = ({ title, subtitle}) => {
  return (
    <section className='section-timeline-header'>
        <div className="timeline-head-notes">
            <h3>{title} </h3>
            <h4>{subtitle}</h4>
            <div className="underline"></div>
        </div>
        

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
            300: {
                width: 300,
                slidesPerView: 1,
              },
            400: {
            width: 400,
            slidesPerView: 1,
          },
          600: {
            width: 600,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
    <section className='section-timeline-content'>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict9} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Web Dev</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>Since-2016</p>
               <p className='timeline-text'>In the tech field since 2016, I have worked both solo and with teams on small and more complex projects, sometimes as a team leader and other times as a web dev.</p>
           </div>

        </article>
    </SwiperSlide>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict1} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Community Developer</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>Since-2005</p>
               <p className='timeline-text'>I found myself so many times in that role. My last time was in 2018, working as volunteer with HackBelgium. Helping them to build their community using social medias, planning events and evangelize the brand. </p>
           </div>

        </article>
    </SwiperSlide>   


    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict6} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>MMA - Digital Branding </p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2019</p>
               <p className='timeline-text'>This course is part of the CurtinX MMA Credential in Marketing in a Digital World that is specifically designed to teach the critical skills needed to be successful in this exciting field.</p>
           </div>

        </article>
    </SwiperSlide>
    
    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict5} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>BA Management</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2016</p>
               <p className='timeline-text'>Bachelor's degree programs in management cover communications theories, organizational behavior, critical thinking strategies, data analysis, management ethics and international business.</p>
           </div>

        </article>
    </SwiperSlide>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict10} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>CEO - Urban Farm</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2016 2021</p>
               <p className='timeline-text'>Started in my student dorm room with the desire to help urban residents have their own vegetable production in small spaces, the project has grown with the opening of a low tech and sustainable urban farm after winning several iOT awards.</p>
           </div>

        </article>
    </SwiperSlide>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict0} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Home-Gardening Campus</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2019</p>
               <p className='timeline-text'>My project at the end of my web dev training was the creation of an indoor urban agriculture space in order to provide the tech-campus with aromatic and food plants and prove that we can do more with less and with almost no impact on the environment. </p>
           </div>

        </article>
    </SwiperSlide>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict4} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Best iOT Award</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2018</p>
               <p className='timeline-text'>First Hackathon won in the year 2018 with the creation of a portable module to connect any type of vegetable garden to a local network of consumers. We worked in partnership with Microsoft Innovation Center (MIC), a tech center in Belgium. </p>
           </div>

        </article>
    </SwiperSlide>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict7} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Best Tech Project Award</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2017</p>
               <p className='timeline-text'>First hackathon won [organized by Samsung] with a low tech connected vegetable garden project made of recycled materials. We worked in partnership with MolenGeek, a tech training center in Brussels. </p>
           </div>

        </article>
    </SwiperSlide>

    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict3} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Special Event Coordinator</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2010</p>
               <p className='timeline-text'>After the success of events creation with Pierre Marcolini, I created a private circle specialized in the organization of luxury culinary and recreational events, with several hundred members on 3 continents.</p>
           </div>

        </article>
    </SwiperSlide>  
    
     
    <SwiperSlide>
        <article className='timeline-content'>
            <div className="timeline-img-container">
                <span className='timeline-img-span'>
                    <img src={pict2} alt="" />
                </span>
            </div>
           <span className='timeline-title'> 
           <p className='timeline-single-title'>Digital Content Creator</p>
           </span>

           <div className="timeline-text-container">
               <p className='timeline-date'>2008</p>
               <p className='timeline-text'>Creation of a Facebook fan pages before the trend of them. Started by the Pierre Marcolini's marketing team, I was in charge of writing articles and co-organizing exclusive events in Belgium.</p>
           </div>
        </article>
    </SwiperSlide>


    
    </section>
    </Swiper>


    </section>
  );
};


Timelines.defaultProps = {
    title: 'Timeline',
    subtitle: 'Major Milestones'
}

Timelines.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}





export default Timelines