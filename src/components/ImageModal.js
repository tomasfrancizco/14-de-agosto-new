import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Modal.setAppElement('#___gatsby');

const ImageModal = ({ isOpen, onRequestClose, images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Image Carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </Modal>
    );
};

export default ImageModal;
