import React from 'react';
import '../styles/TechnicalInformation.css';

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
  { title: "Item 1", subtitle: "Subtitle 1", imageUrl: technicalInformation_1 },
  { title: "Item 2", subtitle: "Subtitle 2", imageUrl: technicalInformation_2 },
  { title: "Item 3", subtitle: "Subtitle 3", imageUrl: technicalInformation_3 },
  { title: "Item 4", subtitle: "Subtitle 4", imageUrl: technicalInformation_4 },
  { title: "Item 5", subtitle: "Subtitle 5", imageUrl: technicalInformation_5 },
  { title: "Item 6", subtitle: "Subtitle 6", imageUrl: technicalInformation_6 },
  { title: "Item 7", subtitle: "Subtitle 7", imageUrl: technicalInformation_7 },
  { title: "Item 8", subtitle: "Subtitle 8", imageUrl: technicalInformation_8 },
  { title: "Item 9", subtitle: "Subtitle 9", imageUrl: technicalInformation_9 },
  { title: "Item 10", subtitle: "Subtitle 10", imageUrl: technicalInformation_10 },
  { title: "Item 11", subtitle: "Subtitle 11", imageUrl: technicalInformation_11 },
  { title: "Item 12", subtitle: "Subtitle 12", imageUrl: technicalInformation_12 },
  { title: "Item 13", subtitle: "Subtitle 13", imageUrl: technicalInformation_13 },
  { title: "Item 14", subtitle: "Subtitle 14", imageUrl: technicalInformation_14 },
  { title: "Item 15", subtitle: "Subtitle 15", imageUrl: technicalInformation_15 },
  { title: "Item 16", subtitle: "Subtitle 16", imageUrl: technicalInformation_16 },
  { title: "Item 17", subtitle: "Subtitle 17", imageUrl: technicalInformation_17 },
  { title: "Item 18", subtitle: "Subtitle 18", imageUrl: technicalInformation_18 },
  { title: "Item 19", subtitle: "Subtitle 19", imageUrl: technicalInformation_19 },
  { title: "Item 20", subtitle: "Subtitle 20", imageUrl: technicalInformation_20 },
  
];

const TechnicalInformation = () => {
  return (
    <div className='technical-information-list'>
      {items.map((item, index) => (
        <div key={index} className="list-item">
          <div className="left-column">
            <img src={item.imageUrl} alt={item.title} />
          </div>
          <div className="right-column">
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TechnicalInformation