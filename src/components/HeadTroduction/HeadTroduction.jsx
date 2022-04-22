import React from 'react'

//IMPORT ANT DESIGN FEATURES
import {Space} from 'antd'

//IMPORT ANT DESIGN ICONS
import { LinkedinOutlined, GithubOutlined, IdcardOutlined, ExperimentOutlined } from '@ant-design/icons'

//IMPORT CSS
import './index.css'

const HeadTroduction = () => {
  return (
    <section className='intro-section'>
        <div>
            <span className='intro-content'>
                <p>
                    This website is fully built in <b>ReactJS</b> using <b>Ant Design</b>, <b>Material-Ui</b>, <b>Swiper</b>, <b>Rellax</b>, <b>Redux</b>, Router-Dom <b>and more</b>. Inspired by <a href="https://www.algopulse.io/" target="_blank" rel="AlgoPulse">Algopulse</a> website.
                </p>
            </span>
        </div>

        <div className='intro-logo'>
        <Space>
          <a href="https://github.com/VicThorMetaNode" target='_blank'> <GithubOutlined /> </a>
          <a href="https://welovedevs.com/app/developer/victor-php-and-react-developer-passionne-de-web-dev" target='_blank'> <IdcardOutlined /> </a>
          <a href="https://www.linkedin.com/in/vic-thor-6aa023100/" target='_blank'> <LinkedinOutlined /> </a>

          <a href="https://gitlab.com/tecnam" target='_blank'> <ExperimentOutlined /> </a>
        </Space>
        </div>
    </section>
  )
}

export default HeadTroduction