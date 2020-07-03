import React, { Component } from 'react';
import { boardPeople } from './boardPeople';
import './Board.css';

class Board extends Component {
    render() {
        return (
            <div>
                <h1>Hi. I am the Board Page.</h1>
                {Object.keys(boardPeople).map(date => (
                    <div key={date}>
                        <h2>{date}</h2>
                        {boardPeople[date].map(person => (
                            <div>
                                <img
                                    className="board-photos"
                                    src={require(`./imgs/${date}/${person.imgName}`)}
                                />
                                <br/>
                                {person.name} <br/>
                                {person.title} <br/>
                                {person.desc}
                                <br/> <br/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Board;
