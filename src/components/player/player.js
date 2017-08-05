import React from 'react';

import Counter from '../counter/counter';

const Player = (props) => {
    return (
        <div className="player">
            <div className="player-name">
                {props.person.name}
            </div>
            <div className="player-score">
                <Counter score={props.person.score} />
            </div>
        </div>
    );
};


export default Player;