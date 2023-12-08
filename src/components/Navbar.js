import React, { useEffect } from 'react';
import '../styles/Navbar.css';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Navbar = () => {

  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (location.pathname !== '/technical-information/') {
      navbar.style.display = 'none';
    }
  }, [location])

  console.log({ location })

  return(
    <div className='navbar'>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Navbar