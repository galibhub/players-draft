import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      

{

  purchasedPlayers.map(player=><SelectedCard player={player}></SelectedCard>)

}

    </div>
  );
};

export default SelectedPlayers;
