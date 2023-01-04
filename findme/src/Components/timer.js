import React, { useEffect } from 'react'

function Timer() {
  const[state,setState]=React.useState({
    sec:0,
    min:0
  })

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setState({...state,
//                 sec:state.sec+1})
//       if(state.sec===59){
//         setState({sec:0,
//                  min:state.min+1});
// }
//     },1000);
  
//     return () => clearInterval(interval);
//   });


  return (
    <div>{state.min<10?"0"+state.min:state.min}:{state.sec<10?"0"+state.sec:state.sec}</div>
  )
}

export default Timer;