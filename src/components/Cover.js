import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/Cover.css';

const Cover = ({ title, subtitle }) => {
    return (
        <div className='cover-container'>
          <StaticImage
            src="../images/pexels-helena-lopes-841303.jpg"
            alt="Cover Image"
            placeholder="blurred"
            loading='lazy'
            aspectRatio={3 / 2} // Adjust this as needed
            style={{ maxHeight: '1200px',  }}
            imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="cover-content">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
          </div>
        </div>
    );
};

export default Cover;
