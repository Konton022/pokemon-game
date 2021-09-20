import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";

import app from "./App.module.css";
import background from "../../assets/bg1.jpeg";
import logo from "../../logo.svg";

const HomePage = ({ onChangePage }) => {
  const handleClickButton = (page) => {
    //console.log("####, <HomePage />");
    onChangePage && onChangePage(page);
  };
  return (
    <div className={app.App}>
      <Header
        title="This is header title string"
        descr="This is description"
        onClickButton={handleClickButton}
      />

      <Layout title="This is first title string" urlBg={background}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </p>
      </Layout>

      {/* <Layout title="This is second title string" colorBg="#8c999d">
        <div className={app.flex}>
          {POKEMONS.map((item) => (
            <PokemonCard
              key={item.id}
              name={item.name}
              type={item.type}
              id={item.id}
              img={item.img}
              values={item.values}
            />
          ))}
        </div>
      </Layout> */}

      <Layout title="This is thrid title string" urlBg={background}>
        <img src={logo} alt="logo" />
      </Layout>
    </div>
  );
};

export default HomePage;
