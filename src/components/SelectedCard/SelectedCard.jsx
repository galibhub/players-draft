import React from 'react';

const SelectedCard = ({player}) => {

    console.log(player)
    return (
        <div className="border-2 mt-5 border-gray-500 p-4 flex justify-between items-center rounded-xl">
        <div className="flex items-center">
          <img
            className="h-[5opx] w-[50px] rounded-xl"
            src={player.player_image}
            alt=""
          />

          <div className="ml-2">
            <h1 className="font-bold ">{player.player_name}</h1>
            <p className="text-xs">{player.playing_role}</p>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
        </div>
      </div>
    );
};

export default SelectedCard;