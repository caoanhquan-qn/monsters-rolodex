import { Monster } from '../../App';
import './Card.css';

type CardProps = {
  monster: Monster;
  key: Number;
};

function Card({ monster }: CardProps) {
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
