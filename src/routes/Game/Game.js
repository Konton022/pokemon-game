import { useRouteMatch, Route, Switch } from "react-router";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";
import { PlayersContext } from "../../context/playersContext";
import { useState } from "react";

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  // console.log("selectedPokemons", selectedPokemons);
  const match = useRouteMatch();
  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      return { ...prevState, [key]: pokemon };
    });
  };
  const selectedCardsPlayer1 = (cards) => {
    // console.log("cards", cards);
    setPlayer1((prevState) => [...prevState, ...cards]);
  };
  const selectedCardsPlayer2 = (cards) => {
    // console.log("cards", cards);
    setPlayer2((prevState) => [...prevState, ...cards]);
  };
  // console.log("player2", player2);
  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <PlayersContext.Provider
          value={{
            player1: player1,
            player2: player2,
            selectedPlayer1: selectedCardsPlayer1,
            selectedPlayer2: selectedCardsPlayer2,
          }}
        >
          <Route path={`${match.path}/board`} component={BoardPage} />

          <Route path={`${match.path}/finish`} component={FinishPage} />
        </PlayersContext.Provider>
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
