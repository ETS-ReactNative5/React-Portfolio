import React, { useState, useEffect } from 'react';

//IMPORT REACT ICONS
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


//IMPORT DATA
import data from './data';

//IMPORT CSS
import './index.css'




function Slider()  {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);


  return (
    <section className="slider-page">
      <div className="slider-title">
        <h3>
          <span>Slider</span>
        </h3>
      </div>
      <div className="slider-section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="slider-person-img" />
              <h4 className="slider-content-name">{name}</h4>
              <p className="slider-content-title">{title}</p>
              <p className="slider-content-text">"{quote}"</p>
              <FaQuoteRight className="slider-content-icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
};

export default Slider