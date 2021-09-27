import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQW9QFQydo9JtMPkVxxAt55ImBDXyNUsQ",
  authDomain: "pokemon-game-fd5db.firebaseapp.com",
  databaseURL: "https://pokemon-game-fd5db-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-fd5db",
  storageBucket: "pokemon-game-fd5db.appspot.com",
  messagingSenderId: "884218244450",
  appId: "1:884218244450:web:ca2d4c98659783a459903b",
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }
  getPokemonSoket = (cb) => {
    return this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };
  offPokemonSoket = () => {
    return this.database.ref("pokemons").off();
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val());
  };
  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).update(pokemon);
  };
  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database
      .ref("pokemons/" + newKey)
      .set(data)
      .then(() => cb());
  };
}

export default Firebase;
