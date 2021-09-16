import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Layout from '../../components/Layout/Layout'
import POKEMONS from '../../pokemons'
import s from './style.module.css'
function GamePage() {
  return (
    <>


      <Layout title="POKEMON CARD GAME" colorBg="#8c999d">
        <div className={s.flex}>
          {POKEMONS.map((item) => (
            <PokemonCard
              key={item.id}
              name={item.name}
              type={item.type}
              id={item.id}
              img={item.img}
              values={item.values}
              active={item.active}
            />
          ))}
        </div>
      </Layout>

    </>)
}

export default GamePage;
