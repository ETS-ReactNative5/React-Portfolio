const Project = ({project}) => {
  return (
    <div className='project'>  
    <h3>{project.projectName}</h3>
    <p>{project.projectText}</p>
    </div>
  )
}

export default Project