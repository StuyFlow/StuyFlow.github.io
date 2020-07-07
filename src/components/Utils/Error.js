import React, { Component } from 'react';
import './Error.css';

let requestId;
let radius = 1;
let ctx;

const animate = () => {
    clear();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(100,100,radius,radius,0,0,Math.PI*2);
    ctx.fill();
    // radius += 1;
    requestId = window.requestAnimationFrame(animate);
};

const clear = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

const beginAnimation = () => {
    const c = document.getElementById('canvas');
    ctx = c.getContext("2d");
    animate();
};


class Error extends Component {
    componentDidMount() {
        console.log("mounted");
        beginAnimation();
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
