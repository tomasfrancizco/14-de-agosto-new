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

const meatImages = [meat_1, meat_2, meat_3, meat_4];
const wineImages = [wine_1, wine_2, wine_3, wine_4];
const seafoodImages = [seafood_1, seafood_2, seafood_3, seafood_4];

const IndexPage = () => {

  console.log(meat_1)
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  
  const openModal = (images) => {
    setSelectedImages(images);
    setModalIsOpen(true);
    console.log("openModal")
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