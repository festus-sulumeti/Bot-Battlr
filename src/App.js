import React, { Component } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      yourBotArmy: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((bots) => this.setState({ bots }));
  }

  enlistBot = (bot) => {
    if (!this.state.yourBotArmy.find((b) => b.id === bot.id)) {
      this.setState((prevState) => ({
        yourBotArmy: [...prevState.yourBotArmy, bot],
      }));
    }
  };

  releaseBot = (bot) => {
    this.setState((prevState) => ({
      yourBotArmy: prevState.yourBotArmy.filter((b) => b.id !== bot.id),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Bot Battlr</h1>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
        <YourBotArmy yourBotArmy={this.state.yourBotArmy} releaseBot={this.releaseBot} />
      </div>
    );
  }
}

export default App;
