import PropTypes from 'prop-types'

// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react"

//IMPORT REACT DOM ROUTER TOOLS
import { Route, Link } from 'react-router-dom'



// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";

//PHOTOS FOLDER
import pict0 from '../../../img/overlay-001.jpg'
import pict1 from '../../../img/overlay-light-sky.png'
import pict2 from '../../../img/infra.jpg'
import pict3 from '../../../img/overlay-breaking-news-003.jpg'
import pict4 from '../../../img/crop.jpg'



// import required modules
import { FreeMode, EffectCoverflow } from "swiper";

const ProjHeader = ({ title, text}) => {
  return (
      <article className='section-project-page'>
    <section className='section-project-header'>
            <div className="project-header-head-notes">
                <h4>{title}</h4>
                <p>{text} </p>
                <div className="underline"></div>
            </div>
    </section>

    <Swiper
        // slidesPerView={2}
        // spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[ EffectCoverflow, FreeMode]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="mySwiper"
        breakpoints={{
            300: {
                width: 350,
                slidesPerView: 1,
              },
            400: {
            width: 370,
            slidesPerView: 1,
          },
          600: {
            width: 400,
            slidesPerView: 1,
          },
          768: {
            width: 500,
            slidesPerView: 1,
          },
        }}
      >

    <section className='section-project-header-slider'>
      
    <SwiperSlide>
    <a href="https://hellobnbworld.netlify.app" target='_blank'>
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict2}  alt="algopict" />
            <div className='slide-project-header-text'>
                <h4>APi Project</h4>
                <p>Crypto News</p>
            </div>
            </div>
        </article>
        </a>
    </SwiperSlide>

    <SwiperSlide>
    <a href="https://meta-nests.vercel.app/" target='_blank'>
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict3}  alt="algopict" />
            <div className='slide-project-header-text'>
                <h4>APi Project</h4>
                <p>Metaverse Real Estate</p>
            </div>
            </div>
        </article>
        </a>
    </SwiperSlide>

    <SwiperSlide>
    <a href="https://webtipity.netlify.app/" target='_blank'>
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict4}  alt="algopict" />
            <div className='slide-project-header-text'>
                <h4>Parallax Project</h4>
                <p>Simple Cover using Rellax</p>
            </div>
            </div>
        </article>
        </a>
    </SwiperSlide>


    <SwiperSlide>
    <a href="../Projects.js">
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict1}  alt="algopict" />
            <div className='slide-project-header-text'>
                <h4> Next Api Project</h4>
                <p>Coming Soon</p>
            </div>
            </div>
        </article>
        </a>
    </SwiperSlide>
    
    <SwiperSlide>
    
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict0}  alt="algopict" />
            <div className='slide-project-header-text'>
                <h4>React Particles</h4>
                <p>Coming Soon </p>
            </div>
            </div>
        </article>
     
        
    </SwiperSlide>

   <SwiperSlide>
       
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict1}  alt="algopict" />
            <div className='slide-project-header-text'>
                <h4>React Full </h4>
                <p>Coming Soon</p>
            </div>
            </div>
        </article>
  
    </SwiperSlide>

    <SwiperSlide>
    <a href="../Projects.js">
        <article className='slide-project-header-container'>
          <div className='slide-project-header-content'>
            <img src={pict3}  alt="" />
            <div className='slide-project-header-text'>
                <h4>More & More</h4>
                <p>Coming Soon</p>
            </div>
            </div>
        </article>
        </a>
    </SwiperSlide>

    </section>
    </Swiper>
    </article>
  )
}

ProjHeader.defaultProps = {
    title: 'Latest Projects',
    text: "Everything I've been working on, all in one place. From basic features to more complex projects, discover all there is to know about my skills."
}

ProjHeader.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}


export default ProjHeader