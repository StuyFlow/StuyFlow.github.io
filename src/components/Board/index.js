import React, { Component } from 'react';
import { board } from './board';
import './Board.css';

class Board extends Component {
    render() {
        return (
            <div>
                <h1>Hi. I am the Board Page.</h1>
                {board.map(term => (
                    <div key={term.year}>
                        <h2>{term.year}</h2>
                        {term.people.map(person => (
                            <div>
                                <img
                                    className="board-photos"
                                    src={require(`./imgs/${term.year}/${person.imgName}`)}
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
