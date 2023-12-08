import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/TechnicalInformationModal.css';

const TechnicalInformationModal = ({ isOpen, onRequestClose, item, items }) => {
  
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: items.indexOf(item)
  };

  if (items.length === 0) {
    return null;
  }
  
  return(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Technical Info Carousel">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className='carousel-content'>
            <img src={item.src} alt={`Slide ${index}`} />
            <p className="carousel-text">{item.title}</p>
          </div>
        ))}
      </Slider>
    </Modal>
  )
}

export default TechnicalInformationModal;