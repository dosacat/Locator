import React, {useState} from "react";
import { UilSearchAlt, UilQuestionCircle } from '@iconscout/react-unicons';

function Header() {
  const [modal, setModal] = useState(false);
  function toggleRules(){
    setModal(!modal); 
  }

  return (
    <div className="flex items-center justify-center w-screen h-[80px] bg-gradient-to-r from-[#22c55e] to-green-600  drop-shadow-lg">
      <div><UilSearchAlt size={50} className="absolute left-[7px] top-[15px] text-white"/></div>
      <div className="flex  items-center offset={-200}"><h1 className="hover:scale-125 font-sans text-4xl font-semibold text-purple-900">Find me!</h1></div>
      <div>< UilQuestionCircle  size={50} className="absolute right-[7px] top-[15px] text-white hover:scale-125" onClick={toggleRules} /></div>

      {modal && (
        <div className="bg-white rounded-lg shadow dark:bg-gray-700 w-100 p-4 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 m-20">
          {/* <div onClick={toggleModal}></div> */}
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">How to Play?</h2>
            {/* <button className="text-xl font-semibold w-5 h-5 hover:bg-gray-200 flex justify-center items-center rounded-lg" onClick={toggleRules}>
              X
            </button> */}
          </div>
            <p>
              Left click cursor to find the hidden characters.
            </p>
            
          </div>
        // </div>
      )}
    </div>
  )
}

export default Header;