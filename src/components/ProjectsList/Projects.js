import PropTypes from 'prop-types'
import Project from './Project'

//PROJECTS LIST
const project = [
  {
      id: 1,
      projectName: 'Creative DarkMode',
      projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
  },
  {
      id: 2,
      projectName: 'Metapolis Event Tracker',
      projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
  },
  {
      id: 3,
      projectName: 'Crypto Password Generator',
      projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
  },
  {
      id: 4,
      projectName: 'NFT Market Place',
      projectText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
  },

]


//PROJECTS LAYOUT
//we get the single projects from project.js

const Projects = ({ title, subtitle }) => {
  return (

    <div className='container'>
        <div className="head-notes">
         <h2>{title}</h2>
         <h3>{subtitle}</h3>
        </div>

    <div className="carousel-projects">
    <>
    {project.map((project) => (
    <Project key={project.id} project={project} /> 
    ))}
    </>
    </div>
    </div>
    
  )
}



Projects.defaultProps = {
    title: 'Latest Projects',
    subtitle: 'Devl in REACT, PHP, SASS, BOOTSTRAP',
}

Projects.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}


export default Projects