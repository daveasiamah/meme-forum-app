import firebase from "firebase";
// import firebase from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcjL9PKmAYfo1IYyu4on1R4G91CgaMtJU",
  authDomain: "fir-login-3fcfd.firebaseapp.com",
  databaseURL: "https://fir-login-3fcfd.firebaseio.com",
  projectId: "fir-login-3fcfd",
  storageBucket: "fir-login-3fcfd.appspot.com",
  messagingSenderId: "970889373022",
  appId: "1:970889373022:web:9238c5ed6d88e1c5"
};
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
