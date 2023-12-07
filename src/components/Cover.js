import React, { useEffect } from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/Cover.css';

const Cover = ({ title, subtitle }) => {


    useEffect(() => {
      const coverContent = document.querySelector('.cover-content-init');
      coverContent.setAttribute('class', 'cover-content')
    }, [])


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
          <div className="cover-content-init">
              <div>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                {/* <Link to='/technical-information'><button>Technical Information</button></Link> */}
                <Link to='/'><button>Technical Information</button></Link>
              </div>
          </div>
        </div>
    );
};

export default Cover;
