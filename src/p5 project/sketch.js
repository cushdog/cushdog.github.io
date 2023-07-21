let theta;
let tracker = 350;
let line_height = 40;

function setup() {
  createCanvas(710, 400);
}

function draw() {
  console.log(tracker);
  strokeWeight(0.9); // set thickness of the line
  background(0);
  frameRate(30);
  stroke('#00A9A5'); // set the color of the line
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  // let a = (mouseY / width) * 90;
  let a = tracker;
  // Convert it to radians
  theta = radians(a);
  // Start the tree from the bottom of the screen
  translate(width/2,height);
  // Draw a line 120 pixels
  line(0,0,0,-line_height);
  // Move to the end of that line
  translate(0,-line_height);
  // Start the recursive branching!
  branch(line_height);
  tracker = (tracker + 1) % 360;

}

function branch(h) {
  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    line(0, 0, 0, -h);  // Draw the branch
    translate(0, -h); // Move to the end of the branch
    branch(h);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}