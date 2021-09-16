import NavBar from "../../components/NavBar/NavBar";
import s from './style.module.css'
function GamePage() {
  return (
    <>
      <div>
        <NavBar bgActive={true} />
      </div>
      <div>
        <div className={s.content}>This is Game Page</div>
      </div>
    </>)
}

export default GamePage;
