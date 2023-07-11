import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

// Define your p5.js sketch as a function
const sketch = (p) => {
  let theta;
  let tracker = 350;

  p.setup = () => {
    p.createCanvas(710, 400);
  };

  p.draw = () => {
    p.strokeWeight(3.5);
    p.clear();
    p.frameRate(30);
    p.stroke('#138A36');
    let a = tracker;
    theta = p.radians(a);
    p.translate(p.width / 2, p.height);
    p.line(0, 0, 0, -120);
    p.translate(0, -120);
    branch(120);
    tracker = (tracker + 1) % 360;
  };

  function branch(h) {
    h *= 0.66;
    if (h > 2) {
      p.push();
      p.rotate(theta);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      branch(h);
      p.pop();

      p.push();
      p.rotate(-theta);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      branch(h);
      p.pop();
    }
  }

  // You can also add other p5.js lifecycle methods here if needed

  // Make sure to return the p5.js sketch
  return sketch;
};

const P5Sketch = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default P5Sketch;