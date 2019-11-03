import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDVM7qF0v2tAeuBV_XIjGR0RlvDYHlHWYM",
  authDomain: "meme-forum-app.firebaseapp.com",
  databaseURL: "https://meme-forum-app.firebaseio.com",
  projectId: "meme-forum-app",
  storageBucket: "meme-forum-app.appspot.com",
  messagingSenderId: "672760395643",
  appId: "1:672760395643:web:36dbc1cd30e883732eafde",
  measurementId: "G-XPMNMJFMVQ"
};
// Initialize Firebase
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
// app.analytics();

export { base };
