function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(190, 230, 255);

  // sky 
  noStroke();
  fill(170, 220, 255);
  rect(0, 0, width, 250);

  // ground
  fill(140, 200, 120);
  rect(0, 350, width, 250);

  // path
  fill(210, 185, 140);
  beginShape();
  vertex(390, 600);
  vertex(510, 600);
  vertex(570, 350);
  vertex(330, 350);
  endShape(CLOSE);

  //  MAIN GATE 

  // side pillars
  fill(110, 70, 35);
  rect(180, 130, 45, 300, 8);
  rect(675, 130, 45, 300, 8);

  // top beam
  rect(150, 130, 600, 35, 10);

  // roof
  fill(170, 130, 80);

  beginShape();
  vertex(120, 130);
  vertex(780, 130);
  vertex(700, 50);
  vertex(200, 50);
  endShape(CLOSE);

  

  noStroke();

  // hanging sign ropes
stroke(60);
line(350, 165, 350, 195);
line(550, 165, 550, 195);

noStroke();

//  BOARD
fill(190, 150, 90);
rect(310, 195, 280, 70, 15);

// text
fill(40);
textAlign(CENTER);

textSize(28);
text("SATPURA", 450, 225);

textSize(22);
text("TIGER RESERVE", 450, 250);
  //GATE DOORS

  stroke(80, 50, 20);
  strokeWeight(3);

  // left gate
  fill(120, 80, 40);
  rect(225, 330, 100, 120);

  // right gate
  rect(575, 330, 100, 120);

  // gate bars
  for (let y = 350; y <= 430; y += 20) {
    line(225, y, 325, y);
    line(575, y, 675, y);
  }

  for (let x = 245; x <= 305; x += 20) {
    line(x, 330, x, 450);
  }

  for (let x = 595; x <= 655; x += 20) {
    line(x, 330, x, 450);
  }

  noStroke();

  // TREES

  drawTree(100, 300);
  drawTree(760, 300);
  drawTree(40, 330);
  drawTree(820, 330);
}

// tree function
function drawTree(x, y) {
  fill(100, 60, 20);
  rect(x, y, 25, 70);

  fill(60, 150, 70);
  ellipse(x + 12, y, 90, 90);

  fill(80, 170, 80);
  ellipse(x - 15, y + 10, 60, 60);
  ellipse(x + 25, y + 10, 60, 60);
}