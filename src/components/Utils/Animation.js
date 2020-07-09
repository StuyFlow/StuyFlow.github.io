import React, { Component } from 'react';
import './Error.css';

const circle = (t, radius) => {
    return [radius*Math.cos(t), radius*Math.sin(t)];
}

let requestId;
let radius = 15;
let x = 100;
let y = 100;
let t = 0;
let slowness = 100;
let ctx;
let animationFunc = circle;



const animate = () => {
    clear();
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.fillStyle = "#AAAADD";
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.ellipse(x + (width / 2), y + (height / 2), radius, radius, 0, 0, Math.PI*2);
    ctx.fill();
    [x, y] = animationFunc(t, 60);
    t += Math.PI/slowness;
    if (t > Math.PI * 10) {
        t = 0;
    }
    requestId = window.requestAnimationFrame(animate);
};

const clear = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

const beginAnimation = () => {
    const c = document.getElementById('canvas');
    ctx = c.getContext("2d");
    animate();
};

class PoiAnimation extends Component {
    componentDidMount() {
        beginAnimation();
    }

    render() {
        return (
            <div>
                <canvas width={600} height={600} className="canvas" id="canvas">
                </canvas>
            </div>
        )
    }
}

export default PoiAnimation;
