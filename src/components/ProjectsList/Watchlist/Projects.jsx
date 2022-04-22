import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Layout, Typography, Space} from 'antd'

import data from './Data'
import List from './List'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/scrollbar"



// IMPORT CSS + ANT DESIGN
import './index.css'
import {ReloadOutlined, QuestionOutlined, LinkedinOutlined, GithubOutlined, IdcardOutlined, ExperimentOutlined } from '@ant-design/icons'





//PROJECTS LAYOUT
//we get the single projects from project.js

function Projects() {
  const [people, setPeople] = useState(data);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className='watchlist-page'>
        <h3>{people.length} NFT Artists in the Watchlist</h3>
           <List people={people}  />
    <button onClick={()=> setPeople([])} className='watchlist-btn'> Clear the list </button>

    <div className='code-watch-container'>
      <div className='code-watch-content'>
           <h4> About this partly project  </h4>
          <button className='watch-code-btn'onClick={()=> setShowInfo(!showInfo)}>
            {showInfo ? <ReloadOutlined />: <QuestionOutlined /> } 
          </button>
    </div>
    {showInfo && 
    <>
    <Swiper
      direction={"vertical"}
      slidesPerView={"auto"}
      freeMode={true}
      scrollbar={true}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      className="mySwiper"
    >
      <SwiperSlide>
        <p>
        This feature has been developed using <b>UseSate</b>, a data base and a people listing. Designed with <b>Ant Design</b> & Antd Icons.
        </p>
        <div className='contact-logos-xs'>
        <Space>
          <a href="https://github.com/VicThorMetaNode" target='_blank'> <GithubOutlined /> </a>
          <a href="https://welovedevs.com/app/developer/victor-php-and-react-developer-passionne-de-web-dev" target='_blank'> <IdcardOutlined /> </a>
          <a href="https://www.linkedin.com/in/vic-thor-6aa023100/" target='_blank'> <LinkedinOutlined /> </a>

          <a href="https://gitlab.com/tecnam" target='_blank'> <ExperimentOutlined /> </a>
        </Space>
        </div>
        
      </SwiperSlide>
    </Swiper>
  </>
    }
    </div>
    
    </section>
  )
};





export default Projects