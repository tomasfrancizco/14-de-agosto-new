import React from 'react';
import '../styles/Contact.css';
import mapImage from '../images/map.jpg'; // Update the path to your image

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-text">
                <h2>Contact Us</h2>
                <p>Feel free to reach out for any inquiries about our products.</p>
                {/* Add more text or a form here as needed */}
            </div>
            <div className="contact-image">
                <img src={mapImage} alt="Contact" />
            </div>
        </div>
    );
};

export default Contact;
