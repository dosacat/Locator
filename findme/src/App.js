import Header from "./Components/header";
import Game from './Components/findme';
import firebase from 'firebase/app';
import 'firebase/firestore';

function App() {
  return (
    <div className='bg-[#f0fdf4]'>
      <Header/>
      <Game />
    </div>
  );
}

export default App;
