import React, { Component } from 'react';
import './Error.css';

const startAnimation = () => {
    const c = document.getElementById('canvas');
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(100,100,50,50,0,0,Math.PI*2);
    ctx.fill();
};


class Error extends Component {
    componentDidMount() {
        startAnimation();
    }

    render() {
        return (
            <div className="page error">
                <div className="error-header">
                    Error 404: Page Not Found.
                </div>
                <div className="error-message">
                    You are seeing this page because the url does not exist.
                    Please check it for spelling errors.
                </div>
                <canvas width={400} height={400} className="canvas" id="canvas">

                </canvas>
            </div>
        );
    }
}

export default Error;
