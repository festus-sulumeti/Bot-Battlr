import React from 'react';

function BotCard({ bot, enlistBot, releaseBot }) {
  const { id, name, health, damage, armor, bot_class, avatar_url } = bot;

  const enlist = () => {
    enlistBot(bot);
  };

  const release = () => {
    releaseBot(bot);
  };

  return (
    <li>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      {enlistBot ? (
        <button onClick={enlist}>Enlist</button>
      ) : (
        <button onClick={release}>Release</button>
      )}
    </li>
  );
}

export default BotCard;
