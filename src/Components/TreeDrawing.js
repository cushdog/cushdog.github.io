import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';

// Define your p5.js sketch as a function
const sketch = (p) => {

  let theta;
  let tracker = 350;
  let line_height = 40;
  
  p.setup = () =>  {
    p.createCanvas(130, 120);
  }
  
  p.draw = () =>  {
    console.log(tracker);
    p.strokeWeight(0.9); // set thickness of the line
    p.background('#222725');
    p.frameRate(30);
    p.stroke('#00A9A5'); // set the color of the line
    // Let's pick an angle 0 to 90 degrees based on the mouse position
    // let a = (mouseY / width) * 90;
    let a = tracker;
    // Convert it to radians
    theta = p.radians(a);
    // Start the tree from the bottom of the screen
    p.translate(p.width/2, p.height);
    // Draw a line 120 pixels
    p.line(0,0,0,-line_height);
    // Move to the end of that line
    p.translate(0,-line_height);
    // Start the recursive branching!
    p.branch(line_height);
    tracker = (tracker + 1) % 360;
  
  }
  
  p.branch = (h) => {
    // Each branch will be 2/3rds the size of the previous one
    h *= 0.66;
  
    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 2) {
      p.push();    // Save the current state of transformation (i.e. where are we now)
      p.rotate(theta);   // Rotate by theta
      p.line(0, 0, 0, -h);  // Draw the branch
      p.translate(0, -h); // Move to the end of the branch
      p.branch(h);       // Ok, now call myself to draw two new branches!!
      p.pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
  
      // Repeat the same thing, only branch off to the "left" this time!
      p.push();
      p.rotate(-theta);
      p.line(0, 0, 0, -h);
      p.translate(0, -h);
      p.branch(h);
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