import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import s from "./style.module.css";

const BoardPage = () => {
  const { pokemons } = useContext(PokemonContext);
  const [player2, setPlayer2] = useState([]);
  const history = useHistory();
  const [board, setBoard] = useState([]);
  // console.log(board);
  useEffect(async () => {
    const boardResponse = await fetch(
      "https://reactmarathon-api.netlify.app/api/board"
    );
    const boardRequest = await boardResponse.json();
    setBoard(boardRequest.data);

    const player2Response = await fetch(
      "https://reactmarathon-api.netlify.app/api/create-player"
    );
    const player2Request = await player2Response.json();
    setPlayer2(player2Request.data);
    // console.log("player2  ", player2Request);
  }, []);
  if (Object.keys(pokemons).length === 0) {
    history.replace("/game");
  }
  const handleClickBoardPlate = (position) => {
    // console.log("position ", position);
  };
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(pokemons).map(({ id, name, type, img, values }) => (
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
          />
        ))}
      </div>
      <div className={s.playerTwo}>
        {player2.map(({ id, name, type, img, values }) => (
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
          />
        ))}
      </div>
      <div className={s.board}>
        {board.map((item) => (
          <div
            key={item.position}
            className={s.boardPlate}
            onClick={() => !item.card && handleClickBoardPlate(item.position)}
          >
            {item.card && <PokemonCard {...item} minimize />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
