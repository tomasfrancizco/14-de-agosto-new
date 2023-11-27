import React from 'react';
import '../styles/Contact.css';
import mapImage from '../images/map.jpg'; // Update the path to your image

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-text">
                <h2>Contact Us</h2>
                <p>Presidente Peron 328 #588</p>
                <p>CABA - Argentina</p>
                <p>Phone +54 911 4342 9073</p>
                <p>WhatsApp <a href='https://api.whatsapp.com/send/?phone=5491127163700'>+5491127163700</a></p>
                <p>WeChat Id <a href='weixin://dl/chat?SA14DeAgosto'>SA14DeAgosto</a></p>
            </div>
            <div className="contact-image">
                {/* <img src={mapImage} alt="Contact" /> */}
                <iframe src="https://www.google.com/maps/d/embed?mid=1YfvOFcflrjOMBO7YBEVXmWkaPIPVZVU&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
            </div>
        </div>
    );
};

export default Contact;
