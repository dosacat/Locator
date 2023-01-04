import Header from "./Components/header";
import Game from './Components/findme';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useState } from "react";

function App() {
  const [stop, stopTimer]=useState(false);
  return (
    <div className='bg-[#f0fdf4]'>
      <Header />
      <Game />
    </div>
  );
}

export default App;
