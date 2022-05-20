import { useEffect } from 'react'
import PropTypes from 'prop-types'

//IMPORT RELLAX
import Rellax from "rellax";

//IMPORT COUNTDOWN from JS
import './chrono'

//IMPORT COUNTDOWN CSS 
import './index.css'

//we are using props: using ({props names like title}) then using .defaultProps
const Header = ({toptitle, title, subtitle}) => {
    useEffect(() => {
        new Rellax(".animate", {
          speed: -3,
          center: false,
          wrapper: null,
          round: true,
          vertical: true,
          horizontal: false
        });
    }, []);
    return (

        <header className='header'>
            <div className="header-content">
            <h4> {toptitle} </h4> 
            <div className='header-chrono'>
                <div className='chrono-item'>

                    <p>Next Project : GenFlow website Clone in NextJS</p>

                    
                </div>    
                <div className='chrono-item'>
                    <div className='chrono-text'>
                    <p id="demo" class="chrono"></p>
                    </div> 
                </div> 
            </div>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
            </div>
            {/* <Buttons /> */}
        </header>
         )
        }
    



        Header.defaultProps = {
            toptitle: 'Fully Upgraded Version 2022',
            title: 'Aloha, Victhor, WebDev',
            subtitle: 'Webdev, Bizz Dev, Digital Marketer',
        }

        Header.propTypes = {
            toptitle: PropTypes.string,
            title: PropTypes.string,
            subtitle: PropTypes.string,
        }
    
    
export default Header