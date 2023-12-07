import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/ImageModal.css';

Modal.setAppElement('#___gatsby');

const ImageModal = ({ isOpen, onRequestClose, images }) => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if (images.length === 0) {
      return null;
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Image Carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='carousel-content'>
                        <img src={image.src} alt={`Slide ${index}`} />
                        <p className="carousel-text">{image.text}</p>
                    </div>
                ))}
            </Slider>
        </Modal>
    );
};

export default ImageModal;
