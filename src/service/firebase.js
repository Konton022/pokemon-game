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
export const fire = firebase;
export const database = fire.database();

export default database;
