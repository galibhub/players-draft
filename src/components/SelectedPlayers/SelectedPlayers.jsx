import React from 'react';

const SelectedPlayers = ({purchasedPlayers}) => {
  
    return (
        <div className="max-w-[1200px] mx-auto">
            
        <div className="border-2 border-gray-500 p-4 flex justify-between items-center rounded-xl">

    <div className="flex items-center">
        <img className="h-[5opx] w-[50px] rounded-xl" src="https://i.ibb.co.com/Z1YLNV6n/tamim.png" alt="" />

        <div className="ml-2">
            <h1 className="font-bold ">Tamim Iqbal</h1>
            <p className="text-xs">Left Hand Bat</p>
        </div>
    </div>
    <div>
        <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
    </div>
        
        </div>

        </div>
    );
};

export default SelectedPlayers;