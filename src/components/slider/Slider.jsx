import React, { useState } from 'react';
import './slider.scss';
import Next from './../../assets/images/next.svg';
import Previous from './../../assets/images/previous.svg';

const Slider = ({ setData }) => {
  const pics = setData.pictures;
  const length = pics.length;

  const [current, setCurrent] = useState(0);

  const nextPic = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevPic = () => {
    setCurrent(current === length - 1 ? 0 : current - 1);
  };

  if (!Array.isArray(pics) || length <= 0) {
    return null;
  }
  console.log(current);

  return (
    <>
      <div className="slider">
        {pics.map((pic, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current || (
                <img src={pic} alt="photos logement" key={index} />
              )}
              ;
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
        <span className="counter">{1 + '/' + length}</span>
      </div>
    </>
  );
};

export default Slider;
