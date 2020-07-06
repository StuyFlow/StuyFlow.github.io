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
                <div className="pageHeader">StuyFlow Board Members</div>
                <div className="year">
                    <div className="year-label">Year:</div>
                    <select className="year-selector" onChange={this.changeYear}>
                        {Object.keys(board).map(term => (
                            <option key={term}>
                                {term}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="board-members">
                    {members.map(person => (
                        <div className="person">
                            <img
                                className="board-photo"
                                src={require(`./imgs/${this.state.year}/${person.imgName}`)}
                            />
                            <div className="info">
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
