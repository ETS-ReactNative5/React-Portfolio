import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

//IMPORT RELLAX
import Rellax from "rellax";



//JOBS LIST
const experience = [
    {
        id: 1,
        company: 'BeCode',
        jobTitle: 'Web Dev',
        dates: '2018',
        duties: 'Full-time IT projects with partners. Selected among more than 100 participants, I joined the BeCode team in 2018. Half time web dev training, half time working on IT projects with partners, I mainly developed in React & Sass. ',
        dutiesNd: 'During this period, I also found myself into Code Coaching for youth, to initiate young people to web dev. I broke the record of Tech conference given at BeCode and won two hackathon awards as well.',
        tools: 'BOOTSTRAP, JS, SCSS, REACT, MATERIAL-UI, TRELLO, GitHUb, NPM, APi, ...',
    },
    {
        id: 2,
        company: 'Girleek',
        jobTitle: 'Marketer & Web Dev',
        dates: '2019',
        duties: 'Girleek solves the problem of employing women and minorities in the new technology and digital sector. The team provides training for recruiters and entrepreneurs to develop their employer brand, reap the benefits of community resources and recruit a diverse talent pool.',
        dutiesNd: 'During this period, I was in charge of managing clients marketing projects to help them to increase their online presence (mainly website optimization, copywriting and SEO).',
        tools: 'NOTION.so, GOOGLE TAG/TRENDS, HOTJAR/NEIL PATEL, ADOBE SPARK/CANVA, ...   ',
    },
    {
      id: 3,
      company: 'Essatto',
      jobTitle: 'IT Manager',
      dates: '2020',
      duties: 'Contract Job. Working on a varity of clients web projects mostly in ReactJs for boosting user interaction with websites and web app: chat, comments, scrolling, etc.',
      dutiesNd: 'Collaborating with the Engineering Team, supporting the building of new product features, improving UI and UX across all our web projects.',
      tools: 'AGILE, SCRUM, NOTION.so, GitHub, ...',
  },
    {
        id: 4,
        company: 'ModByFink',
        jobTitle: 'Web Dev & Bizz Dev',
        dates: 'Since 2020',
        duties: 'Freelance. Helping small and medium-size companies in their business development through digital transformation and web development.',
        dutiesNd: 'Developing web app mainly in React and help clients with business developement and digital Marketing. As side projects, I help artists to decentralized themselves, mainly building interactive resources on the Web3 and help them to take advantage of the crypto world.',
        tools: 'ReactJS, REDUX, ANT DESIGN, SWIPER, PAW, RAPIDAPi, NextJS, ...',
    },
]

//JOBS LAYOUT
function XP () {
  useEffect(() => {
    new Rellax(".animate", {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
}, []);
  const [value, setValue] = useState(0);

  const { company, dates, duties, jobTitle, dutiesNd, tools } = experience[value];
  return (

       <section className='section-xp'>
      <div className="head-notes-xp">
        <h3>Experiences</h3>
        <h4>My latest jobs</h4>
        <div className='underline'></div>
      </div>

      
<div className="section-xp-desc" >
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
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{dutiesNd}</p>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{tools}</p>
              </div>
      </article>
           </div>
           </div>
        </section>

);
}




  

export default XP