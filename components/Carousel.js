import React from 'react';
import { amxImages } from '../public/assets/images';

export default function Carousel() {
  const images = Object.keys(amxImages).map(
    (key) => `/assets/images/amx/${amxImages[key]}`
  );
  // console.log(images)

  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={images[0]} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={images[1]} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src={images[2]} className='d-block w-100' alt='...' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-target='#carouselExampleIndicators'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-target='#carouselExampleIndicators'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </button>
    </div>
  );
}
