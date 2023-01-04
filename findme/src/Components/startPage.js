import React from 'react'

export default function StartPage({setGame,game,setIntro,intro}) {
    function startGame(){
        setGame(!game);
        setIntro(!intro);
    };

  return (
        
    <div className="h-96 flex flex-col items-center justify-center">
    <div className="flex items-center justify-center p-5 m-10 text-4xl font-semibold text-fuchsia-900">Click the button to start game.</div>
    <div className="flex items-center justify-center"><button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={startGame}>Play!</button></div>
    </div>
    
  )
}
