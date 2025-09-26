import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const AvilablePlayers = ({ playersPromise,setAvilableBalance,avilableBalance,purchasedPlayers,setPurchasedPlayers }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 ">

      {
      
      playerData.map(player => <PlayerCard player={player} avilableBalance={avilableBalance} setAvilableBalance={setAvilableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}> </PlayerCard>
      )}
    </div>
  );
};

export default AvilablePlayers;
