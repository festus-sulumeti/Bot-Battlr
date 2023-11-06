import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <ul>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
