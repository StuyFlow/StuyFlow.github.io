import React, { Component } from 'react';

import { board } from './board';
import './Board.css';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            year: "2020-2021",
        }
    }

    changeYear = e => {
        this.setState({ year: e.target.value });
    }

    render() {
        const members = board[this.state.year];
        return (
            <div className="page">
                <div className="pageHeader">StuyFlow Board</div>
                <div className="section-nav">
                    <div className="selector">
                        <div className="label">Year:</div>
                        <select className="dropdown" onChange={this.changeYear}>
                            {Object.keys(board).map(term => (
                                <option key={term}>
                                    {term}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="board-members">
                    {members.map(person => (
                        <div className="person row">
                            <div className="photo-div col-12 col-lg-4 col-xl-3">
                                <img
                                    className="board-photo"
                                    src={require(`./imgs/${this.state.year}/${person.imgName}`)}
                                    alt={person.name}
                                />
                            </div>
                            <div className="info col-12 col-lg-7 col-xl-8">
                                <div className="board-name">
                                    {person.name}
                                </div>
                                <div className="board-title">
                                    {person.title}
                                </div>
                                <div className="board-desc">
                                    {person.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Board;
