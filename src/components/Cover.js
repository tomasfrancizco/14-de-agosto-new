import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Cover.css';

const Cover = ({ title, subtitle }) => {
    return (
        <div className='cover-container'>
          <StaticImage
            src="../images/temp_cover.jpeg"
            alt="Cover Image"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="cover-content">
              <h1>{title}</h1>
              <p>{subtitle}</p>
          </div>
        </div>
    );
};

export default Cover;
