import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/report-1.png";

const PlayerCard = ({ player, setAvilableBalance, avilableBalance,setPurchasedPlayers,purchasedPlayers}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice=parseInt(playerData.price.split("USD").join("").split(",").join(""))
    if(avilableBalance<playerPrice)
    {
        alert("Not Enough Coin")
        return
    }
    setIsSelected(true);
    setAvilableBalance(
      avilableBalance - playerPrice
    );

setPurchasedPlayers([...purchasedPlayers,playerData])


  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-[250px] object-cover"
          src={player.player_image}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        <div className="flex justify-between  mt-4 border-gray-400 border-b-1 pb-2">
          <div className="flex items-center ">
            <img className="w-[20px] h-[20px] " src={flagImg} alt="" />
            <span className="ml-2">{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between items-center font-bold">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">{player.bating_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-3 flex justify-between items-center">
          <p className="font-bold">price: ${player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => {handleSelected(player)}}
            className="btn btn-primary"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
