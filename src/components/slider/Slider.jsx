import React, { useState } from 'react';
import './slider.scss';
import Next from './../../assets/images/next.svg';
import Previous from './../../assets/images/previous.svg';

const Slider = ({ currentAccomodation }) => {
  const pics = currentAccomodation.pictures;
  const length = pics.length;

  // handle slider
  const [current, setCurrent] = useState(0);

  // this is the last image ? Then if you click, go back to the first
  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // this is the first image ? Then if you click, go back to the last
  const prevPic = () => {
    setCurrent(current === length - 1 ? 0 : current - 1);
  };

  if (!Array.isArray(pics) || length <= 0) {
    return null;
  }

  return (
    <>
      <div className="slider">
        {pics.map((pic, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={pic} alt="photos logement" key={index} />
              )}
            </div>
          );
        })}
        <div className="arrows">
          <div className="arrow lft" onClick={prevPic}>
            <img src={Previous} alt="flêche précedent" />
          </div>
          <div className="arrow rgt" onClick={nextPic}>
            <img src={Next} alt="flêche suivant" />
          </div>
        </div>
        <span className="counter">{current + 1 + '/' + length}</span>
      </div>
    </>
  );
};

export default Slider;
