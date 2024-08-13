import React from 'react';
import './Review.css';
import { AiFillStar } from 'react-icons/ai';
import person1 from '../Images/7img.avif';
import person2 from '../Images/8img.avif';
import person3 from '../Images/9img.avif';
import person4 from '../Images/10img.avif';
import mainImage from '../Images/beach1.avif';

const Review = () => {
  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className='textDiv'>
          <span className='redText'>
            From our Clients
          </span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their agency, customers can expect an enriching and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.
          </p>
          <span className='stars flex'>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
          </span>
          <div className='clientImages flex'>
            <img src={person1} alt='Client Image'/>
            <img src={person2} alt='Client Image'/>
            <img src={person3} alt='Client Image'/>
            <img src={person4} alt='Client Image'/>
          </div>
        </div>
        <div className="imgDiv">
          <img src={mainImage} alt='Main Image'/>
        </div>
      </div>
    </div>
  );
}

export default Review;