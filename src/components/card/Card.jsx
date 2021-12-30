import React from 'react';
import './Card.css';

function Card(props) {
  const { monster } = props;
  const srcImg = `https://robohash.org/${monster.id}?set=set2&size=180x180`;
  return (
    <div className="card-container">
      <img src={srcImg} alt="monster" />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
}

export default Card;
