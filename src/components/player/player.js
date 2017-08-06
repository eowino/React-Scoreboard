import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Counter from '../counter/counter';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: props.person.score
        };

        this.decrementScore = this.decrementScore.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
    }

    decrementScore() {
        this.setState(() => {
            return {
                score: (this.state.score - 1)
            }
        });
    }

    incrementScore() {
        this.setState(() => {
            return {
                score: (this.state.score + 1)
            }
        });
    }

    render() {
        return (
            <div className="player">
                <div className="player-name">
                    {this.props.person.name}
                </div>
                <div className="player-score">
                    <Counter 
                        score={this.state.score}
                        decrementScore={this.decrementScore}
                        incrementScore={this.incrementScore} />
                </div>
            </div>
        );
    }
}

Player.propTypes = {
	person: PropTypes.object.isRequired
};
