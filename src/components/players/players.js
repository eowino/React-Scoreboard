import React from "react";

import Player from "../player/player";

const Players = (props) => {
  return (
    <div className="players">
      {props.players.map(player => {
        return <Player person={player} key={player.id} />;
      })}
    </div>
  );
};

export default Players;
