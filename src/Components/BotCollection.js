import BotCard from "./BotCard"

function BotCollection({  botCollection, botArmy,  setBotArmy, setIsActive }){
   //creating an array full of card components fir the bots data
   const botCards = botCollection.map((bot) => (
    <Botcard
       key={bot.id}
       bot = {bot}
       botArmy = {botArmy}
       setBotArmy = {setBotArmy} 
       setIsActive = {setIsActive}
    />
   ));
    return (
        <div>
            <div>
              <div>{botCards}</div>
            </div>
        </div>
    )
}

export default BotCollection;