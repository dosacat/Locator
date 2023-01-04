import React from 'react';
import Timer from './timer';

function Instructions({birdy,ball}) {
  return (
    <div className="flex justify-between bg-white h-30">
                <div>
                <div className="text-2xl p-4 font-semibold text-fuchsia-900">These are the hidden objects you must find:</div>
                
                    <ul className="flex">
                        <li className="mx-4 "><img src={birdy} alt="yellow birdy"/></li>
                        <li className="mx-6 mt-3"><img src={ball} alt="coloured ball"/></li>
                    </ul>
                </div>
                <div className="text-2xl p-4 font-semibold text-fuchsia-900"><Timer/></div>    
    </div>
  )
}

export default Instructions;