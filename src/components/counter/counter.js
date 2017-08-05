import React from 'react';

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action decrement"> + </button>
        </div>
    );
};


export default Counter;