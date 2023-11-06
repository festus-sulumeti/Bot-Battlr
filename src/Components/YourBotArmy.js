import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ yourBotArmy, releaseBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {yourBotArmy.map((bot) => (
          <BotCard key={bot.id} bot={bot} releaseBot={releaseBot} />
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
