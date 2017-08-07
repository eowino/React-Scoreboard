import React, { Component } from "react";

import "./App.css";
import Header from "./components/header/header";
import Player from "./components/player/player";
import Stats from "./components/stats/stats";
import players from "./services/people";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      players: players || []
    };

    this.onScoreChange = this.onScoreChange.bind(this);
  }

  onScoreChange(index, delta) {
    this.state.players[index].score += delta;
    this.setState(() => {
      return {
        players: players
      };
    });
  }

  render() {
    let playerCount = this.state.players.length;

    let score = this.state.players.reduce(
      (total, player) => total + player["score"],
      0
    );

    return (
      <div className="scoreboard">
        <Header title="Scoreboard">
          <Stats players={playerCount} totalPoints={score} />
        </Header>

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                person={player}
                key={player.id}
                onScoreChange={delta => this.onScoreChange(index, delta)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
