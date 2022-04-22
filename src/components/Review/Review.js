import React, {useState} from 'react'
import people from './ReviewsData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {ImBubbles3} from "react-icons/im";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, review } = people[index];

    const checkNumber = (number) => {
        if (number > people.length -1) {
            return 0;
        }
        if (number < 0) {
            return people.length -1;
        }
        return number;
    };

    const nextPerson = () => {
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
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
          randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
      };

  return (
      <section className='section-carousel'>
          <article className='review'>
              <div className="img-container">
                  <span className='person-img'>
                 <ImBubbles3 />
                  </span>
              </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{review}</p>
          <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
          </article>
      </section>
  );
};

export default Review