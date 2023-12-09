import React, { useEffect } from 'react';
import '../styles/Navbar.css';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Navbar = ({ show }) => {

  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (location.pathname !== '/technical-information/') {
      navbar.style.display = 'none';
    }
  }, [location])

  if (!show) {
    return null;
  }

  return(
    <div className='navbar'>
      <Link to='/'>HOME</Link>
    </div>
  )
}

export default Navbar