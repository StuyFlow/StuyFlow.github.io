import React, { Component } from 'react';
import './Error.css';

const circle = (t, radius) => {
    return [radius/3*Math.cos(t), radius/3*Math.sin(t)];
}

const twoPetalInspin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(3*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(3*t))];
}

const threePetalInspin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(4*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(4*t))];
}

const fourPetalInspin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(5*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(5*t))];
}


const threePetalAntispin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(-2*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(-2*t))];
}

const fourPetalAntispin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(-3*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(-3*t))];
}

const fivePetalAntispin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(-4*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(-4*t))];
}

const sixPetalAntispin = (t, radius) => {
    return [-radius/4.5 * (Math.sin(t) + Math.sin(-5*t)),
            -radius/4.5 * (Math.cos(t) + Math.cos(-5*t))];
}

const pentagram = (t, radius) => {
    return [-radius/4.5 * (Math.sin(2*t) + Math.sin(-3*t)),
            -radius/4.5 * (Math.cos(2*t) + Math.cos(-3*t))];
}

const octagram = (t, radius) => {
    return [-radius/4.5 * (Math.sin(3*t) + Math.sin(-5*t)),
            -radius/4.5 * (Math.cos(3*t) + Math.cos(-5*t))];
}

let requestId;
let radius = 15;
let t = 0;
let slowness = 70;
let ctx;
let animationFunc = circle;
const trailing = 800;


const animate = () => {
    clear();
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    ctx.fillStyle = "#AAAADD";
    for (let i = 0; i < trailing; i++) {
        const [x, y] = animationFunc(t - (Math.PI / slowness * i * 0.1), width);
        ctx.globalAlpha = (trailing - i) / trailing;
        ctx.beginPath();
        ctx.ellipse(x + (width / 2), y + (height / 2), radius, radius, 0, 0, Math.PI*2);
        ctx.fill();
    }

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
