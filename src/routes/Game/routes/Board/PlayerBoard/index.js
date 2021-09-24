import s from style.module.css
import PokemonCard from "../../../../../components/PokemonCard/PokemonCard";

const PlayerBoard = (cards) => {
  return <div>
  
          {cards.map(({ id, name, type, img, values }) => (
          <PokemonCard
            className={s.card}
            key={id}
            name={name}
            type={type}
            id={id}
            img={img}
            values={values}
            minimize
            active
          />))}
</div>;
};

export default PlayerBoard;
