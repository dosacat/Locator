import React, {useState,useEffect} from "react";
import birdy from '../Assets/images/birdy.png';
import ball from '../Assets/images/ball.png';
import Canvas from "../Assets/images/canvas.png";
import {db} from "../Firebase/firebase";
import { collection,onSnapshot } from "firebase/firestore"; 
import StartPage from "./startPage";
import Instructions from "./instructions";
import Banner from "./banner";




function Game() {

    var [arr,setArr]=useState([]) //To ensure same obejct not clicked twice.

    // to store ratios of image click location.
    const [dim,setDim]=useState({w:0,h:0})

    //State to start or end game.
    const [game, setGame] = useState(false);

    //State to check if all objects found.
    const [foundall,setFoundall] = useState(0);

    //State to display start page before game play.
    const [intro, setIntro] = useState(true);

    //State to display dropdown menu.
    const [options,setOps]=useState(false);

    //State to store mouse click location
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

    //To store retrieved firestore 
    const [loc, setLoc] = useState([]);

    const [stop,setStop]=useState(false)
    
        

    function option(event){
        setDim({
            w:Math.round(10*(event.pageX-event.target.offsetLeft)*100/event.target.offsetWidth)/10,
            h:Math.round(10*(event.pageY-event.target.offsetTop)*100/event.target.offsetHeight)/10
        })
    
        setOps(true);
        setGlobalCoords({
            x: event.pageX,
            y: event.pageY,
          });

    }

    //To access firestore db to compare clicked location and target location
    function getItems(){
        onSnapshot(collection(db, "items"),(snapshot)=>{
            setLoc(snapshot.docs.map(doc => doc.data() ))
        });
    }

    // UseEffect hook when DOM loaded, to load answer co-ordinates. 
    useEffect(() => {    
        getItems();
    },[]);
    
    // function to check whether player wins.
    function checkwin(){
        setFoundall(foundall+1)
    }

    useEffect(()=> {
        if (foundall===2){
            setStop(true)
            alert("You win the game! Please refresh the page to restart a new game.")
            setFoundall(0)}
            
        },[foundall,stop])


    //checks whether clicked correct location
    async function handleCardClick(event){
        if(!arr.includes(event.target.id)){
            loc.forEach((lo)=> {
                if (event.target.id === lo.name){
                    if (dim.w >= lo.X_left &&  (dim.w) <=lo.X_right){
                        if (dim.h >= lo.Y_top &&  (dim.h) <=lo.Y_bottom){
                            alert("You found item")
                            setArr(event.target.id)
                            checkwin()
                            return;
                        }
                    }
                }})
        }
        
        
    }



    return(
        
        <div>
        <Banner foundall="foundall"/>

        {intro && <StartPage setGame={setGame} game={game} setIntro={setIntro} intro={intro}/> }
        
        
        {game && (
            <>
            <Instructions birdy={birdy} ball={ball} stop={stop}/>
            <div className="flex justify-center bg-[#c8e5f5]"><img src={Canvas} alt="multiple objects camoflaged" className="object-fill h-[800px] w-[800px]  -mt-1 cursor-crosshair" onClick={option}/></div>
            </>
        )}

        {options && 
        (
            <div className="bg-white w-32 border border-slate-300 absolute" style={{left:`${globalCoords.x}px`,top:`${globalCoords.y}px`}}>
            <div className="border border-slate-300 hover:border-slate-500" onClick={handleCardClick} id="birdy">birdy</div>
            <div className="border border-slate-300 hover:border-slate-500" onClick={handleCardClick} id="ball">ball</div>
            </div>)}
        </div>
    )
}
 



export default Game;