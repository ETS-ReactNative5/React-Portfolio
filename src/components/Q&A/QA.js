import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import data from './QAData';
import SingleQuestion from './QAQuestion';

function QA() {
    const [questions, setQuestions] = useState(data);
  return (
    <article className='QA-Page'>
    <div className="head-notes-qa-title">
    <h3>You may ask</h3>
    <h4>Questions & Answers</h4>
    <div className="underline"></div>
    </div>
    
       <section className='section-qa'>
         <container className="head-notes-qa">
           <div className="underline-hidden"></div>
        
        
        <section className='section-qa-content'>
          {questions.map((question) => {
            return<SingleQuestion key={question.id} {...question} />;
          })}
        </section>
        </container>
      </section>
    </article>
  );
}

  
  export default QA;



// function QA() {
//     const [questions, setQuestions] = useState(data);
//     const Aka = ({ title, subtitle }) => {

//   return (
//     <section className='section-qa'>
//         <div className="head-notes-qa">
//             <h3>{title}</h3>
//             <h4>{subtitle}</h4>
//             <div className="underline"></div>
//         </div>

//     <section className='section-qa-content'> 
//         {questions.map((question) => {
//             return<SingleQuestion key={question.id} {...question} />;
//           })}
//     </section>
//     </section>

//   );
// }
// Aka.defaultProps = {
//     title: "Question & Answers",
//     subtitle: "You may ask"
// }

// Aka.propTypes = {
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
// }

// }

// export default QA