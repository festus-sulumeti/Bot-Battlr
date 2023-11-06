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
        fetchData();
    }, []);
}