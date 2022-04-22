import React, { useState } from 'react'
import Review from './ReviewEx'
import './index.css'

import { Space } from 'antd'
import {ReloadOutlined, QuestionOutlined, LinkedinOutlined, GithubOutlined, IdcardOutlined, ExperimentOutlined } from '@ant-design/icons'

function Reviews() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className='reviews-page'>



      
      <article className='reviews-container'>
          <h3>What they think about us</h3>
        <Review />
      </article>


      <div className='code-watch-container'>
      <div className='code-watch-content'>
           <h4> About this partly project  </h4>
          <button className='watch-code-btn'onClick={()=> setShowInfo(!showInfo)}>
            {showInfo ? <ReloadOutlined />: <QuestionOutlined /> } 
          </button>
    </div>
    {showInfo &&
    <>
    <p>
    This feature has been developed using <b>UseSate</b>, a data base and Math.floor. Designed with <b>Ant Design</b> & <b>React Icons</b>.
    </p>
    <div className='contact-logos-xs'>
    <Space>
      <a href="https://github.com/VicThorMetaNode" target='_blank'> <GithubOutlined /> </a>
      <a href="https://welovedevs.com/app/developer/victor-php-and-react-developer-passionne-de-web-dev" target='_blank'> <IdcardOutlined /> </a>
      <a href="https://www.linkedin.com/in/vic-thor-6aa023100/" target='_blank'> <LinkedinOutlined /> </a>

      <a href="https://gitlab.com/tecnam" target='_blank'> <ExperimentOutlined /> </a>
    </Space>
    </div>
    </>
    }
    </div>
  </section>
  )
}

export default Reviews