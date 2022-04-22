import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question, answer}) => {
    //toggle const
    const [showAnswer, setShowAnswer] = useState(false);
      return (
        <article className='question-content'>
            <header>
            <h3> {question}</h3>
            <button className='question-btn'onClick={()=> setShowAnswer(!showAnswer)}>
              {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/> }
            </button>
            </header>
          {showAnswer && <p>{answer}</p>}
        </article>
      );
  };
  
  
  
  
  
  
  export default Question;
  




// const QAQuestion = ({ asked, answer }) => {
//  const [showInfo, setShowInfo] = useState(false);
//   return (
//     <article className='qa-title-content'>
//         <div className="qa-content">
//         <h3>{asked}</h3>
//         <button className='btn'onClick={()=> setShowInfo(!showInfo)}>
//             {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }
//           </button>
//         </div>
//         {showInfo && <p>{answer}</p>}
//     </article>
//   );
// };

// export default QAQuestion