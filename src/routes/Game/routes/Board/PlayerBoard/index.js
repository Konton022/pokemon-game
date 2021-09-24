import s from "./style.module.css";
import PokemonCard from "../../../../../components/PokemonCard/PokemonCard";
import cn from "classnames";
import { useState } from "react";

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);
  return (
    <div>
      {cards.map((item) => (
        <div
          className={cn(s.cardBoard, { [s.selected]: isSelected === item.id })}
          onClick={() => {
            setSelected(item.id);
            onClickCard && onClickCard({ player, ...item });
          }}
        >
          <PokemonCard
            player={player}
            key={item.id}
            name={item.name}
            type={item.type}
            id={item.id}
            img={item.img}
            values={item.values}
            minimize
            active
            // possesion={item.possesion}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerBoard;
