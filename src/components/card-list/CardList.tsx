import Card from '../card/Card';
import { Monster } from '../../App';
import './CardList.css';

type CardListProps = {
  monsters: Monster[];
};

function CardList({ monsters }: CardListProps) {
  return (
    <div className="card-list">
      {monsters.map((monster: Monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
}

export default CardList;
