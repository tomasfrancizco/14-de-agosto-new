import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Card from '../components/Card';
import Contact from '../components/Contact';
import ImageModal from '../components/ImageModal';

import '../styles/global.css';

import meatImage from '../images/meat.png';
import wineImage from '../images/pexels-grape-things-2954924.jpg';
import seafoodImage from '../images/pexels-dana-tentis-725992.jpg';

import meat_1 from '../images/pexels-seb-creativo-13592975.jpg';
import meat_2 from '../images/pexels-viktor-lundberg-755025.jpg';
import meat_3 from '../images/pexels-nadin-sh-9541962.jpg';
import meat_4 from '../images/pexels-los-muertos-crew-8477228.jpg';
import wine_1 from '../images/pexels-julia-volk-5273001.jpg';
import wine_2 from '../images/pexels-ion-ceban-ionelceban-2581022.jpg';
import wine_3 from '../images/pexels-laker-5732740.jpg';
import wine_4 from '../images/pexels-polina-tankilevitch-4110406.jpg';
import seafood_1 from '../images/pexels-bedis-elacheche-891118.jpg';
import seafood_2 from '../images/pexels-giovana-spiller-5801915.jpg';
import seafood_3 from '../images/pexels-valeria-boltneva-679454.jpg';
import seafood_4 from '../images/pexels-cottonbro-studio-3295856.jpg';

const meatImages = [
  {src: meat_1, text: "In the fertile Pampas of Argentina, our cows are raised on lush grasslands, ensuring premium quality meat. The natural diet and open spaces contribute to the unparalleled flavor and tenderness of our Argentine beef."},
  {src: meat_2, text: "Our commitment to ethical practices is evident in our harvesting process. In Argentina, where meat is a culinary art, we ensure each cow is treated with respect, resulting in exceptionally high-quality and healthy meat."},
  {src: meat_3, text: "Argentine butchers, renowned for their skill, meticulously process each cut in state-of-the-art facilities. This precision ensures every piece of meat maintains its rich flavor and texture, making it a perfect centerpiece for any meal."},
  {src: meat_4, text: "Our Argentine beef, vacuum-sealed for freshness, embarks on a journey from the Pampas to your table. Every package reflects the quality and heritage of Argentine meat, promising an exquisite dining experience."}];
const wineImages = [
  {src: wine_1, text: "Patagonia's unique terroir, with its cool climate and pristine environment, nurtures grapes that are rich in flavor. Our vineyards in this serene region are carefully tended to yield the finest grapes, setting the stage for extraordinary wines."},
  {src: wine_2, text: "In the heart of Patagonia, our winemaking process transforms hand-picked grapes into enchanting wines. The fermentation, a blend of tradition and innovation, imbues each bottle with the essence of Patagonia."},
  {src: wine_3, text: "Our wines mature gracefully in Patagonian cellars, gaining complexity and depth. The patience and care invested in this aging process ensure every sip offers a taste of Patagonia's natural splendor."},
  {src: wine_4, text: "Each bottle, a testament to Patagonia's winemaking excellence, is a gateway to the region's soul. Our wines, from vineyard to bottle, encapsulate the spirit of Patagonia, ready to elevate your dining experience."}];
const seafoodImages = [
  {src: seafood_1, text: "The pristine waters of the Southern Seas, teeming with life, are our source for the finest seafood. Sustainable fishing practices not only preserve these waters but also ensure the seafood you enjoy is of the highest quality."},
  {src: seafood_2, text: "Our catch, sourced from the icy, clear waters of the Southern Seas, is handled with utmost care. The freshness and quality of our seafood reflect the purity of its origin, bringing a taste of the ocean's bounty to your plate."},
  {src: seafood_3, text: "The journey from the Southern Seas to your table is marked by rigorous quality control. We ensure that each seafood product, whether chilled or frozen, retains its natural flavors and nutritional value."},
  {src: seafood_4, text: "Our commitment to freshness is unwavering as we transport our seafood from the remote Southern Seas to your doorstep. The meticulous packaging preserves the ocean's freshness, offering you a culinary experience that is both authentic and exquisite."}];

const IndexPage = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  
  const openModal = (images) => {
    setSelectedImages(images);
    setModalIsOpen(true);
  };
  
  return (
    <main>
      {/* <Navbar /> */}
      <Cover 
        title="14 De Agosto" 
        subtitle="Your Gateway to Argentina's Finest Meats, Wines and Seafood." 
      />
      <h3 className="cards-title">Discover Our Products</h3>
      <div className="cards-section">
        <Card title="MEAT" image={meatImage} onClick={() => openModal(meatImages)} />
        <Card title="WINE" image={wineImage} onClick={() => openModal(wineImages)} />
        <Card title="SEAFOOD" image={seafoodImage} onClick={() => openModal(seafoodImages)} />
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