import React, { useState} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'




//JOBS LIST
const experience = [
    {
        id: 1,
        company: 'BeCode',
        jobTitle: 'Web Dev',
        dates: 'Feb 2019',
        duties: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
    },
    {
        id: 2,
        company: 'Girleek',
        jobTitle: 'Web Dev & Marketer',
        dates: 'Dec 2020',
        duties: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
    },
    {
        id: 3,
        company: 'Esatto',
        jobTitle: 'Marketer',
        dates: 'May 2021',
        duties: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non enim praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum.',
    },
]

//JOBS LAYOUT
function XP () {
  const [value, setValue] = useState(0);

  const { company, dates, duties, jobTitle } = experience[value];
  return (

       <section className='section-xp'>

      <div className="head-notes-xp">
        <h3>Experiences</h3>
        <h4>My latest jobs</h4>
        <div className='underline'></div>
      </div>
      
<div className="section-xp-desc">
      <div className="jobs-center">
      <div className="btn-container">
            {experience.map((item, index) => {
              return <button key={item.id} onClick={() => setValue(index)} className={ `job-btn ${index === value && 'active-btn'}`} >{item.company}</button>
            })}
      </div>
        

       <article className='job-info'>
             <h3>{jobTitle}</h3>
             <h4>{company}</h4>
             <p className='job-date'>{dates}</p>

             <div className="job-desc">
                   <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duties}</p>
              </div>
      </article>
           </div>
           </div>
        </section>

);
}





  

export default XP