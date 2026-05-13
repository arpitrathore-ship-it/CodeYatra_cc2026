let mapImg;
let dropSound;
let currentScreen = "menu";
function preload() {

  dropSound = loadSound("water.mp3");

  mapImg = loadImage(
    "map.jpg",

    () => console.log("image loaded"),

    (err) => console.log(err)
  );
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  if (currentScreen === "menu") {
    drawMenu();
  }

  else if (currentScreen === "shivling") {
    drawShivlingPage();
  }

  else if (currentScreen === "tiger") {
    drawTigerPage();
  }
}

// ================= MENU =================


function drawMenu() {

  background(0);

  image(mapImg, 0, 0, width, height);

  fill(255);

  textAlign(CENTER);

  textSize(22);

  text("Click on a location to explore", width / 2, height - 30);
}
// ================= SHIVLING PAGE =================

// Arrays to store particle systems
let ripples = [];
let waterDrops = [];

// Environment properties
let gravity = 0.15;
let dripTimer = 0;

function drawShivlingPage() {

  background(140, 140, 140);

  push();

  // Responsive scaling
  let s = min(width / 800, height / 600);

  translate(width / 2, height / 2);

  scale(s * 1.2);

  translate(-400, -300);

  // Shivling Scene
  drawDeepBackgroundWalls();
  drawMidgroundCaveWalls();
  drawCeilingRock();

  manageDroplets();

  drawTrishula();

  drawShivlinga();

  manageRipples();

  drawHeavyForegroundCaveCorners();

  pop();

  // Back Text
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("Press B to go back", width / 2, height - 40);
}
function drawDeepBackgroundWalls() {
  noStroke();
  fill(22, 24, 30);
  
  // Distant left cave wall cracks
  beginShape();
  vertex(0, 100);
  vertex(120, 180);
  vertex(160, 350);
  vertex(80, 600);
  vertex(0, 600);
  endShape(CLOSE);
  
  // Distant right cave wall curves
  beginShape();
  vertex(800, 80);
  vertex(680, 200);
  vertex(640, 420);
  vertex(720, 600);
  vertex(800, 600);
  endShape(CLOSE);
}

function drawMidgroundCaveWalls() {
  noStroke();
  fill(30, 33, 40);
  
  // Midground left rocky ledge projecting inwards
  beginShape();
  vertex(0, 250);
  vertex(140, 300);
  vertex(180, 480);
  vertex(90, 600);
  vertex(0, 600);
  endShape(CLOSE);
  
  // Midground right rock columns enclosing the sanctuary
  beginShape();
  vertex(800, 220);
  vertex(660, 310);
  vertex(610, 520);
  vertex(760, 600);
  vertex(800, 600);
  endShape(CLOSE);
}

function drawCeilingRock() {
  noStroke();
  // Multi-layered shading for dense overhanging rock vault
  fill(38, 42, 50);
  beginShape();
  vertex(0, 0);
  vertex(180, 60);
  vertex(320, 95);
  vertex(400, 130); // Center point dripping tip
  vertex(480, 90);
  vertex(620, 70);
  vertex(800, 0);
  endShape(CLOSE);
  
  // Additional dark rock layer coming from top corners to create a roof arch
  fill(25, 28, 34);
  beginShape();
  vertex(0, 0);
  vertex(220, 45);
  vertex(150, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(800, 0);
  vertex(580, 55);
  vertex(680, 0);
  endShape(CLOSE);
  
  // Highlight line accentuating the stalactite ceiling structure
  stroke(55, 60, 72);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(320, 95);
  vertex(400, 130);
  vertex(480, 90);
  endShape();
}

function drawHeavyForegroundCaveCorners() {
  noStroke();
  
  // Extra layer of floor framing stones right beneath the altar base
  fill(24, 26, 32);
  ellipse(310, 535, 100, 42);
  ellipse(490, 530, 120, 46);

  // 1. TOP-LEFT Foreground Corner Boulder
  fill(16, 18, 22);
  beginShape();
  vertex(0, 0);
  vertex(130, 0);
  vertex(90, 110);
  vertex(0, 160);
  endShape(CLOSE);

  // 2. TOP-RIGHT Foreground Corner Boulder
  beginShape();
  vertex(800, 0);
  vertex(670, 0);
  vertex(710, 120);
  vertex(800, 170);
  endShape(CLOSE);

  // 3. BOTTOM-LEFT High-Density Framing Rocks (Creeping high into the view)
  fill(14, 16, 20);
  beginShape();
  vertex(-20, 320);
  vertex(70, 390);
  vertex(135, 460);
  vertex(190, 620);
  vertex(-20, 620);
  endShape(CLOSE);
  
  // Chipped rocky block detail overlapping the bottom left corner
  fill(20, 22, 28);
  beginShape();
  vertex(20, 480);
  vertex(110, 495);
  vertex(155, 600);
  vertex(0, 600);
  endShape(CLOSE);
  
  // 4. BOTTOM-RIGHT High-Density Framing Rocks
  fill(12, 14, 18);
  beginShape();
  vertex(820, 290);
  vertex(720, 380);
  vertex(670, 480);
  vertex(610, 620);
  vertex(820, 620);
  endShape(CLOSE);
  
  // Stratified rock ledge overlap detailing on the bottom right corner
  fill(18, 20, 24);
  beginShape();
  vertex(790, 440);
  vertex(660, 510);
  vertex(600, 600);
  vertex(820, 600);
  endShape(CLOSE);
}

function drawShivlinga() {
  push();
  translate(400, 450); // Central safe location inside cave framing
  
  noStroke();
  
  // 1. Bhupati / Base Pedestal (Yoni Base / Pindam)
  // Shadow underside
  fill(32, 35, 40);
  ellipse(0, 50, 220, 60);
  
  // Main base body
  fill(50, 55, 62);
  beginShape();
  vertex(-110, 20);
  vertex(-110, 50);
  vertex(110, 50);
  vertex(110, 20);
  endShape(CLOSE);
  
  // Top surface of the base pedestal
  fill(65, 70, 80);
  ellipse(0, 20, 220, 60);
  
  // Left projecting spout (Argha/Yoni outlet for water drainage)
  fill(50, 55, 62);
  beginShape();
  vertex(-100, 15);
  vertex(-160, 25);
  vertex(-160, 40);
  vertex(-85, 35);
  endShape(CLOSE);
  
  // Top groove of the spout
  fill(40, 44, 50);
  beginShape();
  vertex(-95, 16);
  vertex(-158, 25);
  vertex(-156, 32);
  vertex(-85, 24);
  endShape(CLOSE);
  
  // Water trickling out of the spout
  fill(100, 170, 220, 150);
  ellipse(-160, 33, 8, 12);
  
  // 2. The Lingam (Vertical Ellipsoid Pillar)
  // Back shadow
  fill(35, 38, 44);
  rect(-45, -70, 90, 70, 45, 45, 0, 0);
  
  // Main body
  fill(58, 62, 70);
  rect(-45, -68, 90, 68, 45, 45, 0, 0);
  ellipse(0, 0, 90, 25); // Lower rim connection
  
  // Soft 3D volumetric highlight
  fill(78, 84, 96);
  //ellipse(-10, -50, 60, 30);
  
  // 3. Tripundra (Three horizontal sacred ash lines)
  stroke(210, 210, 215, 160);
  strokeWeight(3);
  noFill();
  arc(0, -35, 50, 12, 0.1, PI - 0.1);
  arc(0, -29, 48, 12, 0.1, PI - 0.1);
  arc(0, -23, 46, 12, 0.1, PI - 0.1);
  
  // Bindu (Red dot in the center of Tripundra)
  stroke(190, 35, 35);
  strokeWeight(5);
  point(0, -25);
  
  pop();
}

function drawTrishula() {
  push();
  // Positioned directly to the right side of the Shivlinga pedestal
  translate(550, 470); 
  
  stroke(40, 44, 50);
  strokeWeight(4);
  
  // Main vertical iron rod shaft
  line(0, 80, 0, -140);
  
  // Outer curved prongs of the trident blade assembly
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(-28, -115);
  quadraticVertex(-25, -80, 0, -80);
  quadraticVertex(25, -80, 28, -115);
  endShape();
  
  // Fill color setup for the sharp endpoints
  fill(50, 55, 62);
  strokeWeight(2);
  
  // Lateral arrowhead tip edges
  triangle(-28, -115, -33, -107, -23, -107);
  triangle(28, -115, 23, -107, 33, -107);
  
  // Central dominant vertical spear blade tip
  triangle(0, -155, -7, -135, 7, -135);
  
  // Sacred Damru drum body shape bound right below the prong base
  fill(90, 60, 42);
  strokeWeight(1.5);
  triangle(-14, -62, 14, -62, 0, -50);
  triangle(-14, -38, 14, -38, 0, -50);
  
  pop();
}

function manageDroplets() {
  // Spawn a new drop at steady intervals from the ceiling tip (400, 130)
  dripTimer++;
  if (dripTimer > 45) { 
    waterDrops.push(new Droplet(400, 130));
    dripTimer = 0;
  }
  
  // Update and render active drops
  for (let i = waterDrops.length - 1; i >= 0; i--) {
    waterDrops[i].update();
    waterDrops[i].display();
    
    // Collision checking with the top vertex of the Shivlinga (approx y = 382)
    if (waterDrops[i].y >= 382) {
      // Trigger a ripple at the impact zone
      ripples.push(new Ripple(400, 382));
      dropSound.play();
      
      // Remove the droplet
      waterDrops.splice(i, 1);
    }
  }
}

function manageRipples() {
  // Update and render splash ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].display();
    
    // Remove faded ripples
    if (ripples[i].alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
}

// Droplet class definition
class Droplet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 0;
    this.w = 4;
    this.h = 8;
  }
  
  update() {
    this.speedY += gravity;
    this.y += this.speedY;
    // Stretch out visually as velocity increases
    this.h = map(this.speedY, 0, 10, 8, 20);
  }
  
  display() {
    noStroke();
    // Glowing clear blue-white water look
    fill(170, 220, 255, 200);
    ellipse(this.x, this.y, this.w, this.h);
  }
}

// Ripple class definition
class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sizeW = 5;
    this.sizeH = 2;
    this.alpha = 255;
  }
  
  update() {
    this.sizeW += 2.5;
    this.sizeH += 0.8; // Constrained height expansion mimics the 3D perspective tilt
    this.alpha -= 4;   // Gradual fade out
  }
  
  display() {
    noFill();
    stroke(180, 230, 255, this.alpha);
    strokeWeight(1.5);
    ellipse(this.x, this.y, this.sizeW, this.sizeH);
  }
}
// ================= TIGER PAGE =================

function drawTigerPage() {

  background(190, 230, 255);

  push();

  // Responsive Scale
  let s = min(width / 900, height / 600);

  translate(width / 2, height / 2);

  scale(s * 1.15);

  translate(-450, -300);

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

  // MAIN GATE

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

  // ropes
  stroke(60);
  line(350, 165, 350, 195);
  line(550, 165, 550, 195);

  noStroke();

  // board
  fill(190, 150, 90);
  rect(310, 195, 280, 70, 15);

  // text
  fill(40);
  textAlign(CENTER);

  textSize(28);
  text("SATPURA", 450, 225);

  textSize(22);
  text("TIGER RESERVE", 450, 250);

  // gate doors

  stroke(80, 50, 20);
  strokeWeight(3);

  fill(120, 80, 40);

  rect(225, 330, 100, 120);
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

  // Trees
  drawTree(100, 300);
  drawTree(760, 300);
  drawTree(40, 330);
  drawTree(820, 330);

  pop();

  // Back text
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Press B to go back", width / 2, height - 40);
}

// ================= TREE FUNCTION =================

function drawTree(x, y) {

  fill(100, 60, 20);
  rect(x, y, 30, 100);

  fill(30, 150, 50);
  ellipse(x + 15, y - 20, 100);
}

// ================= MOUSE CLICK =================



  function mousePressed() {

  // OM / JATASHANKAR
  if (
    currentScreen === "menu" &&
    mouseX > 300 &&
    mouseX < 430 &&
    mouseY > 470 &&
    mouseY < 650
  ) {
    currentScreen = "shivling";
  }

  // TIGER LOCATION
  if (
    currentScreen === "menu" &&
    mouseX > 430 &&
    mouseX < 560 &&
    mouseY > 470 &&
    mouseY < 650
  ) {
    currentScreen = "tiger";
  }
}
// ================= BACK BUTTON =================

function keyPressed() {

  if (key === 'b' || key === 'B') {
    currentScreen = "menu";
  }
}