import React from 'react'

//IMPORT ANT DESIGN FEATURES
import {Space} from 'antd'

//IMPORT ANT DESIGN ICONS
import { LinkedinOutlined, GithubOutlined, IdcardOutlined, ExperimentOutlined } from '@ant-design/icons'

//IMPORT CSS
import './index.css'

const Footer = () => {
  return (
    <>
        <section className='footer-section'>
        <div className='footer-content'>
        <Space>
          <a href="https://github.com/VicThorMetaNode" target='_blank'> <GithubOutlined /> </a>
          <a href="https://welovedevs.com/app/developer/victor-php-and-react-developer-passionne-de-web-dev" target='_blank'> <IdcardOutlined /> </a>
          <a href="https://www.linkedin.com/in/vic-thor-6aa023100/" target='_blank'> <LinkedinOutlined /> </a>

          <a href="https://gitlab.com/tecnam" target='_blank'> <ExperimentOutlined /> </a>
        </Space>
        </div>
        </section>
    </>
  )
}

export default Footer