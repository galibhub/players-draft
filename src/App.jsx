import { Suspense, useState } from "react";
import "./App.css";
import AvilablePlayers from "./components/AvilablePlayers/AvilablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
const [avilableBalance,setAvilableBalance]=useState(600000)

const [purchasedPlayers,setPurchasedPlayers]=useState([])
  
  
  return (
    <>
      <Navbar avilableBalance={avilableBalance}></Navbar>

      <div className=" max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Avilable Players</h1>
        <div className="font-bold">
          <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true ?"bg-[#E7Fe29]":""}`}>
            Avilable
          </button>
          <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7Fe29]":""}`}>
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {
      
      toggle === true ? 
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvilablePlayers playersPromise={playersPromise} avilableBalance={avilableBalance}  setAvilableBalance={setAvilableBalance}  purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} ></AvilablePlayers>
        </Suspense>
       : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )
      }
    </>
  );
}

export default App;
