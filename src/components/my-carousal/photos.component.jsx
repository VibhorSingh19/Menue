import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../../assets/img/carousal/photo1.png';
import Photo2 from '../../assets/img/carousal/photo2.jpg';
import Photo3 from '../../assets/img/carousal/photo3.jpeg';
import Photo4 from '../../assets/img/carousal/photo4.jpeg';
import Photo5 from '../../assets/img/carousal/photo5.jpeg';
import Photo6 from '../../assets/img/carousal/photo6.jpeg';
import Photo7 from '../../assets/img/carousal/photo7.jpeg';

import ScrollDown from '../scroll-down/scroll-down.component';

import './my-carousal.style.css'

const MyPhotos = () => {
  return (
    < div id="home">
      
         <Carousel opacity= {0.6} controls={false} indicators interval={2500} pauseOnHover={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Photo1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Photo2}
      alt="Second slide"
    />

    
  </Carousel.Item> 
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Photo3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
     <ScrollDown/>
    </div>
  );
}

export default MyPhotos;
