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

let t = 0;
let slowness = 70;
let ctxs = [];
let animationFunc = circle;
const trailing = 800;


const animate = () => {
    clear();
    for (let ctx_obj of ctxs) {
        const ctx = ctx_obj["ctx"];
        const radius = ctx_obj["radius"];
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
    }
    window.requestAnimationFrame(animate);
};

const clear = () => {
    for (let ctx_obj of ctxs) {
        const ctx = ctx_obj["ctx"];
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}

const beginAnimation = () => {
    const c = document.getElementById('canvas');
    ctxs.push({"ctx": c.getContext("2d"), "radius": 15});
    const c2 = document.getElementById('canvas2');
    ctxs.push({"ctx": c2.getContext("2d"), "radius": 10});
    animate();
};

const nameToMove = {
    "Static Spin": circle,
    "Two Petal Inspin": twoPetalInspin,
    "Three Petal Inspin": threePetalInspin,
    "Four Petal Inspin": fourPetalInspin,
    "Three Petal Antispin": threePetalAntispin,
    "Four Petal Antispin": fourPetalAntispin,
    "Five Petal Antispin": fivePetalAntispin,
    "Six Petal Antispin": sixPetalAntispin,
    "Pentagram": pentagram,
    "Octagram": octagram,
};

class PoiAnimation extends Component {
    componentDidMount() {
        beginAnimation();
    }

    render() {
        return (
            <div className="poi-div">
                <select
                    className="move-selector"
                    onChange={(e) => {animationFunc = nameToMove[e.target.value]}}
                >
                    {Object.keys(nameToMove).map(name => (
                        <option key={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <br/>
                <canvas
                    width={600}
                    height={600}
                    className="canvas d-none d-lg-block"
                    id="canvas"
                ></canvas>
                <canvas
                    width={300}
                    height={300}
                    className="canvas d-block d-lg-none"
                    id="canvas2"
                ></canvas>
            </div>
        )
    }
}

export default PoiAnimation;
