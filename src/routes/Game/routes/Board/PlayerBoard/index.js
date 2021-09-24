import s from './style.module.css'
import PokemonCard from "../../../../../components/PokemonCard/PokemonCard";
import cn from 'classnames'
import { useState } from 'react';

const PlayerBoard = ({ cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null)
  return (<div>

    {cards.map((item) => (
      <div className={cn(s.cardBoard, { [s.selected]: isSelected === item.id })} onClick={() => { setSelected(item.id); onClickCard && onClickCard(item) }}>
        <PokemonCard

          key={item.id}
          name={item.name}
          type={item.type}
          id={item.id}
          img={item.img}
          values={item.values}
          minimize
          active
        />
      </div>))
    }
  </div >)
};

export default PlayerBoard;
