import React from 'react'

//IMPORT ANT DESIGN
import { Button, Menu, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
//IMPORT REACT DOM ROUTER
import { Link } from 'react-router-dom'



const NavbarProjects = () => {


  return (
    <div className='nav-container'>
        <Menu theme='dark'>
        <Menu.Item icon={<PlusCircleOutlined />}>
           <Link to='/Projects.js' >WatchList</Link>
        </Menu.Item>
        <Menu.Item icon={<PlusCircleOutlined />}>
           <Link to='/ReviewsEx.js' >Reviews</Link>
        </Menu.Item>
        <Menu.Item icon={<PlusCircleOutlined />}>
           <Link to='/Slider.js' >Slider</Link>
        </Menu.Item>
        <Menu.Item icon={<PlusCircleOutlined />}>
           <Link to='/Projects.js' >3NFT Artists Watch List</Link>
        </Menu.Item>
        </Menu>  
    </div>
  )
};

export default NavbarProjects
