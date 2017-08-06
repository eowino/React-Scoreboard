import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={props.decrementScore}> - </button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action decrement" onClick={props.incrementScore}> + </button>
        </div>
    );
};

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    decrementScore: PropTypes.func.isRequired,
    incrementScore: PropTypes.func.isRequired
};

export default Counter;