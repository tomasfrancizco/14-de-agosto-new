import React from 'react';
import '../styles/Contact.css';
import icon_building from "../images/icon_building.png";
import icon_telephone from "../images/icon_telephone.png";
import icon_whatsapp from "../images/icon_whatsapp.png";
import icon_wechat from "../images/icon_wechat.png";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-text">
                <h3>Contact Us</h3>
                <div className='contact-data'>
                    <img src={icon_building} />
                    <div>
                        <p>Presidente Peron 328 #588</p>
                        <p>CABA - Argentina</p>
                    </div>
                </div>
                <div className='contact-data'>
                    <img src={icon_telephone} />
                    <p>Phone +54 911 4342 9073</p>
                </div>
                <div className='contact-data'>
                    <img src={icon_whatsapp} />
                    <a href='https://api.whatsapp.com/send/?phone=5491127163700'><p>WhatsApp +5491127163700</p></a>
                </div>
                <div className='contact-data'>
                    <img src={icon_wechat} />
                    <a href='weixin://dl/chat?SA14DeAgosto'><p>WeChat Id SA14DeAgosto</p></a>
                </div>
            </div>
            <div className="contact-map">
                {/* <img src={mapImage} alt="Contact" /> */}
                <iframe src="https://www.google.com/maps/d/embed?mid=1YfvOFcflrjOMBO7YBEVXmWkaPIPVZVU&ehbc=2E312F&noprof=1" width="100%" height="480"></iframe>
            </div>
        </div>
    );
};

export default Contact;
