import React from 'react';
import '../styles/Card.css';

const Card = ({ title, image, onClick }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${image})` }} onClick={onClick}>
            <div className="card-content">
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Card;
