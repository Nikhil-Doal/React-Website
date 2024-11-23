import React from 'react';
import './Card.css';

function Card({ title, description, buttonText, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="btn primary">{buttonText}</button>
      </a>
    </div>
  );
}

export default Card;
