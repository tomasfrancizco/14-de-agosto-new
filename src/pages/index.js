import React, { useState } from "react";
import Cover from "../components/Cover";
import Card from '../components/Card';
import Contact from '../components/Contact';
import ImageModal from '../components/ImageModal';

import '../styles/global.css';

import meatImage from '../images/meat.png';
import wineImage from '../images/wine.jpg';
import seafoodImage from '../images/seafood.png';

import meat_1 from '../images/meat_1.png';
import meat_2 from '../images/meat_2.png';
import meat_3 from '../images/meat_3.png';
import meat_4 from '../images/meat_4.png';
import wine_1 from '../images/wine_1.png';
import wine_2 from '../images/wine_2.png';
import wine_3 from '../images/wine_3.png';
import wine_4 from '../images/wine_4.png';
import seafood_1 from '../images/seafood_1.png';
import seafood_2 from '../images/seafood_2.png';
import seafood_3 from '../images/seafood_3.png';
import seafood_4 from '../images/seafood_4.png';

const meatImages = [{src: meat_1, text: "meat_1"}, {src: meat_2, text: "meat_2"}, {src: meat_3, text: "meat_3"}, {src: meat_4, text: "meat_4"}];
const wineImages = [{src: wine_1, text: "wine_1"}, {src: wine_2, text: "wine_2"}, {src: wine_3, text: "wine_3"}, {src: wine_4, text: "wine_4"}];
const seafoodImages = [{src: seafood_1, text: "seafood_1"}, {src: seafood_2, text: "seafood_2"}, {src: seafood_3, text: "seafood_3"}, {src: seafood_4, text: "seafood_4"}];

const IndexPage = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  
  const openModal = (images) => {
    setSelectedImages(images);
    setModalIsOpen(true);
  };
  
  return (
    <main>
      <Cover 
        title="14 De Agosto" 
        subtitle="Number #1 Meat, Wine & Seafood supplier from Argentina" 
      />
      <div className="cards-section">
        <Card title="Meat" image={meatImage} onClick={() => openModal(meatImages)} />
        <Card title="Wine" image={wineImage} onClick={() => openModal(wineImages)} />
        <Card title="Seafood" image={seafoodImage} onClick={() => openModal(seafoodImages)} />
      </div>

      <ImageModal
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)} 
          images={selectedImages}
      />

      <Contact />
    </main>
  );
};

export default IndexPage;