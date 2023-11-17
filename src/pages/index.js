import React from "react";
import Cover from "../components/Cover";
import Card from '../components/Card';
import Contact from '../components/Contact';

import '../styles/global.css';

import meatImage from '../images/meat.png';
import wineImage from '../images/wine.jpg';
import seafoodImage from '../images/seafood.png';

const IndexPage = () => {
  return (
    <main>
      <Cover 
        title="14 De Agosto" 
        subtitle="Number #1 Meat, Wine & Seafood supplier from Argentina" 
      />
      <div className="cards-section">
        <Card title="Meat" image={meatImage} />
        <Card title="Wine" image={wineImage} />
        <Card title="Seafood" image={seafoodImage} />
      </div>
      <Contact />
    </main>
  );
};

export default IndexPage;
