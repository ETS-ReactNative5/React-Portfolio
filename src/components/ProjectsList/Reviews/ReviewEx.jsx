import React, { useState } from 'react';
import people from './data';

//IMPORT REACT ICONS
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Review = () => {
  //because we want to access any specific person in 'people', we're gonna use a const named here 'index' to call at anytime and because people ID start with 1 we're gonna use 0 -- Hoping it makes sense
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  //to make sure we don't go higher or lesser than the number of people in the array which = TypeError
  const checkNumber = (number) => {
    //if the number is greater than the last people in the array return 0
    if(number > people.length -1 ){
      return 0;
    }
    //if number is lesser than 0 then return the last person in the array
    if (number < 0) {
      return people.length -1;
    }
    //if neither one of these above states simply return number
    return number;
  };

  const nextPerson = () => {
    //we gonna use a function update form : updating the index with 'setIndex'
    //first accessing the current state value which is 'index'
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    //we use MathFloor to ensure to have a rounded number
    let randomNumber = Math.floor(Math.random() * people.length);
    //we use this if statement to make sure we don't have the same person twice randomly
    if (randomNumber === index){
      randomNumber = index + 1;
    }
    // we need to make sure we don't go out the array as well
    setIndex(checkNumber(randomNumber));
  }




  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>"{text}"</p>
      <div className='button-container'>
      <button className='prev-btn'onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn'onClick={nextPerson}>
        <FaChevronRight />
      </button>
      </div>
      <button className='random-btn'onClick={randomPerson}>Random</button>

    </article>
  )
};

export default Review;
