import React, { useState, useEffect } from 'react';
import '../styles/TechnicalInformation.css';
import Navbar from '../components/Navbar';
import TechnicalInformationModal from '../components/TechnicalInformationModal';

import technicalInformation_1 from "../images/technical-information/9_FULL_SET.png"
import technicalInformation_2 from "../images/technical-information/AGUJA_China.png"
import technicalInformation_3 from "../images/technical-information/ASADO_5_COSTILLAS_China.png"
import technicalInformation_4 from "../images/technical-information/ASADO_8_COSTILLAS_2_China.png"
import technicalInformation_5 from "../images/technical-information/BANANITA.png"
import technicalInformation_6 from "../images/technical-information/BIFE_ANCHO_ch_st.png"
import technicalInformation_7 from "../images/technical-information/BIFE_ANGOSTO_CON_HUESO_1_COSTILLA.png"
import technicalInformation_8 from "../images/technical-information/BOLA_DE_LOMO_China.png"
import technicalInformation_9 from "../images/technical-information/BRAZUELO_VP_China.png"
import technicalInformation_10 from "../images/technical-information/CARNAZA_DE_PALETA_China.png"
import technicalInformation_11 from "../images/technical-information/CHINGOLO_VP_V1_China.png"
import technicalInformation_12 from "../images/technical-information/COGOTE_CON_HUESO.png"
import technicalInformation_13 from "../images/technical-information/CUADRADA_IP_V1_China.png"
import technicalInformation_14 from "../images/technical-information/CUADRIL_China.png"
import technicalInformation_15 from "../images/technical-information/GARRON_SHANK_VACIO_China.png"
import technicalInformation_16 from "../images/technical-information/GRASA_China.png"
import technicalInformation_17 from "../images/technical-information/HUESO_DE_AGUJA_COGOTE_China.png"
import technicalInformation_18 from "../images/technical-information/HUESO_DE_CADERA.png"
import technicalInformation_19 from "../images/technical-information/HUESO_DE_PIERNA_China.png"
import technicalInformation_20 from "../images/technical-information/HUESO_DELANTERO.png"

const items = [
  { title: "9 FULL SET", subtitle: "", src: technicalInformation_1 },
  { title: "AGUJA", subtitle: "", src: technicalInformation_2 },
  { title: "ASADO 5 COSTILLAS", subtitle: "", src: technicalInformation_3 },
  { title: "ASADO 8 COSTILLAS", subtitle: "", src: technicalInformation_4 },
  { title: "BANANITA", subtitle: "", src: technicalInformation_5 },
  { title: "BIFE ANCHO CON HUESO", subtitle: "", src: technicalInformation_6 },
  { title: "BIFE ANGOSTO CON HUESO / COSTILLA", subtitle: "", src: technicalInformation_7 },
  { title: "BOLA DE LOMO", subtitle: "", src: technicalInformation_8 },
  { title: "BRAZUELO", subtitle: "", src: technicalInformation_9 },
  { title: "CARNAZA", subtitle: "", src: technicalInformation_10 },
  { title: "CHINGOLO", subtitle: "", src: technicalInformation_11 },
  { title: "COGOTE CON HUESO", subtitle: "", src: technicalInformation_12 },
  { title: "CUADRADA", subtitle: "", src: technicalInformation_13 },
  { title: "CUADRIL COMPLETO", subtitle: "", src: technicalInformation_14 },
  { title: "GARRON SHANK VACIO", subtitle: "", src: technicalInformation_15 },
  { title: "GRASA CORPORAL", subtitle: "", src: technicalInformation_16 },
  { title: "HUESO DE AGUJA / COGOTE", subtitle: "", src: technicalInformation_17 },
  { title: "HUESO DE CADERA", subtitle: "", src: technicalInformation_18 },
  { title: "HUESO DE PIERNA", subtitle: "", src: technicalInformation_19 },
  { title: "HUESO DELANTERO", subtitle: "", src: technicalInformation_20 },
];

const TechnicalInformation = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  
  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
    setShowNavbar(false);
  };
  
  return (
    <div>
      <Navbar show={showNavbar} />
      <div className='technical-information-list'>
      {items.map((item, index) => (
        <div key={index} className="list-item" onClick={() => openModal(item)}>
          <div className="left-column">
            <img src={item.src} alt={item.title} />
          </div>
          <div className="right-column">
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
        ))}
      </div>
      <TechnicalInformationModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          setShowNavbar(true);
        }}
        item={selectedItem}
        items={items}
      />
    </div>
  )
}

export default TechnicalInformation