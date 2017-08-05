import React, {Component} from 'react';

import Player from '../player/player';
import people from '../../services/people';


export default class Players extends Component {
    constructor() {
        super();
        this.people = people;
    }
    
    render() {
        return (
            <div className="players">
                {this.people.map(person => {
                    return <Player person={person} key={person.id}/>
                })}
            </div>
        );
    }
}