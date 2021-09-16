import { useState } from "react";
import GamePage from "./routes/Game/Game";
import HomePage from "./routes/Home/Home";

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePage = (game) => {
    //console.log("##### <Main />");
    setPage(game);
  };

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage onChangePage={handleChangePage}/>;
    default:
      return <HomePage />;
  }
};

export default App;
