import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import BotSpecs from ".BotSpecs";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
    //the managing tate of the bot 
    const [BotCollection, setBotCollection] = useState([]);
    const [activeBot, setActiveBot] = useState(null);
    const [botArmy, setBotArmy] = useState([]);

    /*Progress fetching*/

    useEffect(() => {
        fetchBotData();
    }, []);


// Getting the bot data
const fetchBotData = () => {
    fetch("https://dbjsonnnnn.vercel.app/bots")
        .then((response) => response.json())
        .then((data) => setBotCollection(data))
        .catch((error) => console.error("Error while getting the bot data:", error))
}

//THe active handler to activate thebot with its details
const handleActiveBot = (bot) => {
    setActiveBot(bot);
}

// the handle to do the deactivation
const handleDeactivateBot = () => {
    setActiveBot(null);
};


//Completeion of the other side of the program

return (
    <div>
      {/*All the displaying here*/}
      {activeBot ? (
        <BotSpecs bot= {activeBot} onDeactivate={handleDeactivateBot}/>
      ) : (
        <BotCollection 
          botCollection = {botCollection}
          botArmy = {botArmy}
          onActivate = {handleActiveBot}
          onAddToArmy = {(bot) => setBotArmy([...botArmy, bot])}
        />
      )}
      
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} />
    </div>
);

}

export default BotsPage;