import PropTypes from 'prop-types'
// import Buttons from './Buttons'


//we are using props: using ({props names like title}) then using .defaultProps

const Header = ({toptitle, title, subtitle}) => {
    return (

        <header className='header'>
            <div className="header-content">
            <h4> {toptitle} </h4>
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