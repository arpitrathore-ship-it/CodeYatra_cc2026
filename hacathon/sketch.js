let mapImg;
let tigerWalk = 0;
let tigerSceneMove = -150; 
let riverSound;
let birdX = -100;
let baseW = 900;
let baseH = 600;
let dropSound;
let waterfallSound;
let menuMusic;
let musicStarted = false;
let currentScreen = "menu";

// Boat scene variables
let boatX = 400;
let boatY = 415;
let waveOffset = 0;

function preload() {
  dropSound = loadSound("water.mp3");
  riverSound = loadSound("river.mp3");
  waterfallSound = loadSound("waterfall.mp3");
  menuMusic = loadSound("song.mp3");
  mapImg = loadImage(
    "map.jpg",
    () => console.log("image loaded"),
    (err) => console.log(err)
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
menuMusic.setVolume(0.5);
}

function draw() {
  if (currentScreen === "boat") {
  if (!riverSound.isPlaying()) {
    riverSound.loop();
    riverSound.setVolume(0.3);
  }
} else {
  if (riverSound.isPlaying()) {
    riverSound.stop();
  }
}
  if (currentScreen === "bhedaghat") {
  if (!waterfallSound.isPlaying()) {
    waterfallSound.loop();
    waterfallSound.setVolume(0.4);
  }
} else {
  if (waterfallSound.isPlaying()) {
    waterfallSound.stop();
  }
}
  if (currentScreen === "menu") {
  if (!menuMusic.isPlaying()) {
    menuMusic.loop();
  }
} else {
  if (menuMusic.isPlaying()) {
    menuMusic.stop();
  }
}
  if (currentScreen === "menu") {
    drawMenu();
  } else if (currentScreen === "shivling") {
    drawShivlingPage();
  } else if (currentScreen === "tiger") {
    drawTigerPage();
  } else if (currentScreen === "jungle") {
    drawJungleScene();
  } else if (currentScreen === "bhedaghat") {
    drawBhedaghatPage();
  } else if (currentScreen === "boat") {
    drawBoatScene();
  }
}

// ================= RESIZE =================
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ================= MENU =================
function drawMenu() {
  background(0);
  image(mapImg, 0, 0, width, height);
  
  fill(0, 0, 0, 160);
  rectMode(CENTER);
  rect(width / 2, height - 40, 700, 60, 10);
  rectMode(CORNER);

  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("S: Shivling  |  T: Tiger Reserve  |  G: Bhedaghat Waterfall", width / 2, height - 32);
}

// ================= SHIVLING PAGE =================
let ripples = [];
let waterDrops = [];
let gravity = 0.15;
let dripTimer = 0;

function drawShivlingPage() {
  background(140, 140, 140);
  push();
  let s = min(width / 800, height / 600);
  translate(width / 2, height / 2);
  scale(s * 1.2);
  translate(-400, -300);

  
  drawDeepBackgroundWalls();
  drawMidgroundCaveWalls();
  drawCeilingRock();
  manageDroplets();
  drawTrishula();
  drawShivlinga();
  manageRipples();
  drawHeavyForegroundCaveCorners();

    push();

resetMatrix();

fill(255);

textAlign(CENTER, TOP);

textStyle(BOLD);

textSize(min(windowWidth, windowHeight) * 0.04);

stroke(0);

strokeWeight(5);

text("Jatashankar Mahadev", windowWidth / 2, 20);

pop();
  pop();

  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("Press B to go back", width / 2, height - 40);
}

function drawDeepBackgroundWalls() {
  noStroke();
  fill(22, 24, 30);
  beginShape();
  vertex(0, 100); vertex(120, 180); vertex(160, 350); vertex(80, 600); vertex(0, 600);
  endShape(CLOSE);
  beginShape();
  vertex(800, 80); vertex(680, 200); vertex(640, 420); vertex(720, 600); vertex(800, 600);
  endShape(CLOSE);
}

function drawMidgroundCaveWalls() {
  noStroke();
  fill(30, 33, 40);
  beginShape();
  vertex(0, 250); vertex(140, 300); vertex(180, 480); vertex(90, 600); vertex(0, 600);
  endShape(CLOSE);
  beginShape();
  vertex(800, 220); vertex(660, 310); vertex(610, 520); vertex(760, 600); vertex(800, 600);
  endShape(CLOSE);
}

function drawCeilingRock() {
  noStroke();
  fill(38, 42, 50);
  beginShape();
  vertex(0, 0); vertex(180, 60); vertex(320, 95); vertex(400, 130); vertex(480, 90); vertex(620, 70); vertex(800, 0);
  endShape(CLOSE);
  fill(25, 28, 34);
  beginShape();
  vertex(0, 0); vertex(220, 45); vertex(150, 0);
  endShape(CLOSE);
  beginShape();
  vertex(800, 0); vertex(580, 55); vertex(680, 0);
  endShape(CLOSE);
  stroke(55, 60, 72);
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(320, 95); vertex(400, 130); vertex(480, 90);
  endShape();
}

function drawHeavyForegroundCaveCorners() {
  noStroke();
  fill(24, 26, 32);
  ellipse(310, 535, 100, 42);
  ellipse(490, 530, 120, 46);

  fill(16, 18, 22);
  beginShape();
  vertex(0, 0); vertex(130, 0); vertex(90, 110); vertex(0, 160);
  endShape(CLOSE);

  beginShape();
  vertex(800, 0); vertex(670, 0); vertex(710, 120); vertex(800, 170);
  endShape(CLOSE);

  fill(14, 16, 20);
  beginShape();
  vertex(-20, 320); vertex(70, 390); vertex(135, 460); vertex(190, 620); vertex(-20, 620);
  endShape(CLOSE);

  fill(20, 22, 28);
  beginShape();
  vertex(20, 480); vertex(110, 495); vertex(155, 600); vertex(0, 600);
  endShape(CLOSE);

  fill(12, 14, 18);
  beginShape();
  vertex(820, 290); vertex(720, 380); vertex(670, 480); vertex(610, 620); vertex(820, 620);
  endShape(CLOSE);

  fill(18, 20, 24);
  beginShape();
  vertex(790, 440); vertex(660, 510); vertex(600, 600); vertex(820, 600);
  endShape(CLOSE);
}

function drawShivlinga() {
  push();
  translate(400, 450);
  noStroke();
  
  fill(32, 35, 40);
  ellipse(0, 50, 220, 60);

  fill(50, 55, 62);
  beginShape();
  vertex(-110, 20); vertex(-110, 50); vertex(110, 50); vertex(110, 20);
  endShape(CLOSE);

  fill(65, 70, 80);
  ellipse(0, 20, 220, 60);
  
  fill(50, 55, 62);
  beginShape();
  vertex(-100, 15); vertex(-160, 25); vertex(-160, 40); vertex(-85, 35);
  endShape(CLOSE);

  fill(40, 44, 50);
  beginShape();
  vertex(-95, 16); vertex(-158, 25); vertex(-156, 32); vertex(-85, 24);
  endShape(CLOSE);
  
  drawWaterStream(-158, 30);
  
  fill(35, 38, 44);
  rect(-45, -70, 90, 70, 45, 45, 0, 0);

  fill(58, 62, 70);
  rect(-45, -68, 90, 68, 45, 45, 0, 0);
  ellipse(0, 0, 90, 25);
  
  stroke(210, 210, 215, 160);
  strokeWeight(3);
  noFill();
  arc(0, -35, 50, 12, 0.1, PI - 0.1);
  arc(0, -29, 48, 12, 0.1, PI - 0.1);
  arc(0, -23, 46, 12, 0.1, PI - 0.1);

  stroke(190, 35, 35);
  strokeWeight(5);
  point(0, -25);
  pop();
}

function drawWaterStream(x, y) {
  stroke(170, 220, 255, 180);
  strokeWeight(3);
  noFill();
  let timeOffset = frameCount * 0.1;
  let streamLength = 100;

  beginShape();
  for (let i = 0; i <= streamLength; i += 10) {
    let xOffset = sin(timeOffset + i * 0.05) * (i * 0.02);
    vertex(x + xOffset, y + i);
  }
  endShape();

  drawStreamSplash(x, y + streamLength);
}

function drawStreamSplash(x, y) {
  noStroke();
  fill(170, 220, 255, 120);
  let splashSize = (frameCount % 30) / 2;
  ellipse(x, y, 15 + splashSize, 5 + splashSize / 3);

  if (frameCount % 5 === 0) {
    fill(170, 220, 255, 200);
    ellipse(x + random(-5, 5), y - random(2, 8), 2, 2);
  }
}

function drawTrishula() {
  push();
  translate(550, 470);
  stroke(40, 44, 50);
  strokeWeight(4);
  line(0, 80, 0, -140);

  strokeWeight(3);
  noFill();
  beginShape();
  vertex(-28, -115);
  quadraticVertex(-25, -80, 0, -80);
  quadraticVertex(25, -80, 28, -115);
  endShape();

  fill(50, 55, 62);
  strokeWeight(2);
  triangle(-28, -115, -33, -107, -23, -107);
  triangle(28, -115, 23, -107, 33, -107);
  triangle(0, -155, -7, -135, 7, -135);

  fill(90, 60, 42);
  strokeWeight(1.5);
  triangle(-14, -62, 14, -62, 0, -50);
  triangle(-14, -38, 14, -38, 0, -50);
  pop();
  
}

function manageDroplets() {
  dripTimer++;
  if (dripTimer > 45) {
    waterDrops.push(new Droplet(400, 130));
    dripTimer = 0;
  }

  for (let i = waterDrops.length - 1; i >= 0; i--) {
    waterDrops[i].update();
    waterDrops[i].display();

    if (waterDrops[i].y >= 382) {
      ripples.push(new Ripple(400, 382));
      dropSound.play();
      waterDrops.splice(i, 1);
    }
  }
}

function manageRipples() {
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].display();
    if (ripples[i].alpha <= 0) ripples.splice(i, 1);
  }
}

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
    this.h = map(this.speedY, 0, 10, 8, 20);
  }

  display() {
    noStroke();
    fill(170, 220, 255, 200);
    ellipse(this.x, this.y, this.w, this.h);
  }
}

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
    this.sizeH += 0.8;
    this.alpha -= 4;
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
  let s = min(width / baseW, height / baseH);
  translate(width / 2, height / 2);
  scale(s);
  translate(-baseW / 2, -baseH / 2);

  noStroke();
  for (let i = 0; i < 250; i++) {
    fill(170 - i * 0.1, 220 - i * 0.05, 255);
    rect(0, i, baseW, 1);
  }

  fill(255, 220, 120, 120);
  ellipse(760, 90, 130);
  fill(255, 210, 80);
  ellipse(760, 90, 80);

  birdX += 2;

if (birdX > 1000) {
  birdX = -100;
}

drawBird(birdX, 120);
drawBird(birdX + 80, 150);

  fill(110, 150, 120);
  beginShape();
  vertex(0, 250); vertex(120, 120); vertex(260, 220); vertex(420, 130); vertex(600, 240); vertex(760, 150); vertex(900, 250); vertex(900, 350); vertex(0, 350);
  endShape(CLOSE);

  fill(120, 185, 100);
  rect(0, 350, baseW, 250);

  stroke(70, 130, 60, 90);
  stroke(70, 130, 60, 90);

for (let i = 0; i < 900; i += 8) {

  let sway = sin(frameCount * 0.05 + i) * 4;

  line(i, 360, i + sway, 350 + random(10));
}

noStroke();
  noStroke();

  fill(210, 185, 140);
  beginShape();
  vertex(390, 600); vertex(510, 600); vertex(570, 350); vertex(330, 350);
  endShape(CLOSE);

  fill(70, 45, 20, 100);
  rect(190, 140, 45, 300, 8);
  rect(685, 140, 45, 300, 8);

  fill(110, 70, 35);
  rect(180, 130, 45, 300, 8);
  rect(675, 130, 45, 300, 8);
  rect(150, 130, 600, 35, 10);

  fill(170, 130, 80);
  beginShape();
  vertex(120, 130); vertex(780, 130); vertex(700, 50); vertex(200, 50);
  endShape(CLOSE);

  fill(120, 90, 60, 100);
  beginShape();
  vertex(130, 130); vertex(770, 130); vertex(700, 70); vertex(200, 70);
  endShape(CLOSE);

  stroke(60);
  line(350, 165, 350, 195);
  line(550, 165, 550, 195);
  noStroke();

  fill(190, 150, 90);
  rect(310, 195, 280, 70, 15);

  fill(40);
  textAlign(CENTER);
  textSize(28);
  text("SATPURA", 450, 225);
  textSize(22);
  text("TIGER RESERVE", 450, 250);

  stroke(80, 50, 20);
  strokeWeight(3);
  fill(120, 80, 40);
  rect(225, 330, 100, 120);
  rect(575, 330, 100, 120);

  for (let y = 350; y <= 430; y += 20) {
    line(225, y, 325, y);
    line(575, y, 675, y);
  }
  for (let x = 245; x <= 305; x += 20) line(x, 330, x, 450);
  for (let x = 595; x <= 655; x += 20) line(x, 330, x, 450);
  noStroke();

  drawTree(100, 300);
  drawTree(760, 300);
  drawTree(40, 330);
  drawTree(820, 330);
  drawTree(10, 260);
  drawTree(860, 260);

  stroke(50);
  strokeWeight(2);
  noFill();
  arc(170, 90, 20, 10, PI, TWO_PI);
  arc(190, 90, 20, 10, PI, TWO_PI);
  arc(260, 120, 18, 10, PI, TWO_PI);
  arc(278, 120, 18, 10, PI, TWO_PI);
  noStroke();

  tigerWalk += 0.015;
  let tigerX = 220 + sin(tigerWalk) * 120;
  let cubX = tigerX - 90;

  pop();

  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Press N for Jungle Safari", width / 2, height - 60);
  text("Press B to go back", width / 2, height - 30);
}

function drawTree(x, y) {

  let sway = sin(frameCount * 0.03 + x) * 5;

  fill(100, 60, 20);
  rect(x, y, 30, 100);

  fill(30, 150, 50);
  ellipse(x + 15 + sway, y - 20, 100);

  fill(40, 170, 60, 180);
  ellipse(x - 10 + sway, y + 5, 70);

  ellipse(x + 35 + sway, y + 5, 70);
}

function drawBird(x, y) {
  stroke(40);
  strokeWeight(2);
  noFill();

  arc(x, y, 20, 10, PI, TWO_PI);
  arc(x + 20, y, 20, 10, PI, TWO_PI);

  noStroke();
}

// ================= JUNGLE SCENE =================
function drawJungleScene() {
  background(30, 40, 50);
  push();
  let s = min(width / 900, height / 600);
  translate(width / 2, height / 2);
  scale(s);
  translate(-450, -300);

  noStroke();
  for (let i = 0; i < 400; i++) {
    let inter = map(i, 0, 400, 0, 1);
    let c = lerpColor(color(45, 55, 80), color(230, 120, 70), inter);
    fill(c);
    rect(0, i, 900, 1);
  }

  fill(255, 200, 100, 80);
  circle(450, 290, 220);
  fill(255, 220, 140, 150);
  circle(450, 290, 140);
  fill(255, 240, 200);
  circle(450, 290, 80);

  fill(85, 75, 90);
  beginShape();
  vertex(0, 400); vertex(150, 220); vertex(350, 280); vertex(550, 190); vertex(750, 270); vertex(900, 200); vertex(900, 400);
  endShape(CLOSE);

  fill(55, 50, 65);
  beginShape();
  vertex(0, 400); vertex(100, 280); vertex(250, 240); vertex(450, 310); vertex(700, 220); vertex(900, 290); vertex(900, 400);
  endShape(CLOSE);

  fill(35, 45, 35);
  rect(0, 350, 900, 250);

  fill(65, 55, 45);
  beginShape();
  vertex(300, 600); quadraticVertex(450, 450, 420, 350); vertex(480, 350); quadraticVertex(550, 450, 600, 600);
  endShape(CLOSE);

  drawCinematicTree(60, 330, 0.95);
  drawCinematicTree(160, 350, 0.75);
  drawCinematicTree(260, 320, 0.6);
  drawCinematicTree(840, 340, 0.9);
  drawCinematicTree(730, 325, 0.7);
  drawCinematicTree(630, 355, 0.65);

  fill(15, 20, 15);
  triangle(0, 600, 0, 450, 180, 600);
  triangle(900, 600, 900, 480, 720, 600);

  tigerSceneMove += 1.2;
  if (tigerSceneMove > 1300) tigerSceneMove = -200;

  let tigerX = tigerSceneMove;
  let cubX = tigerX - 140;

  drawAdvancedTiger(tigerX, 500, 1);
  drawAdvancedCub(cubX, 520, 0.65);

  fill(255, 140, 50, 25);
  rect(0, 0, 900, 600);

  fill(30, 40, 50);
  noStroke();
  rect(-2000, -2000, 2000, 4000);
  rect(900, -2000, 2000, 4000);
  rect(-2000, -2000, 4000, 2000);
  rect(-2000, 600, 4000, 2000);

  pop();

  fill(255, 220);
  textAlign(CENTER);
  textSize(24);
  text("Jungle Safari - Satpura", width / 2, 50);
  textSize(18);
  text("Press B to return", width / 2, height - 40);
}

function drawCinematicTree(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(25, 20, 20);
  noStroke();
  rect(-8, -100, 16, 100, 2);
  stroke(25, 20, 20);
  strokeWeight(6);
  line(0, -60, -30, -90);
  line(0, -40, 35, -80);
  noStroke();
  fill(30, 38, 25);
  circle(0, -110, 90);
  circle(-35, -100, 70);
  circle(45, -90, 80);
  fill(45, 55, 30);
  circle(10, -120, 50);
  circle(-25, -110, 40);
  circle(50, -100, 40);
  pop();
}

function drawAdvancedTiger(x, y, s) {
  push();
  let walkSpeed = frameCount * 0.12;
  let walkAngle = sin(walkSpeed) * 0.4;
  let bobY = abs(sin(walkSpeed)) * 4;

  translate(x, y - bobY);
  scale(s);

  push();
  translate(0, bobY);
  noStroke();
  fill(0, 0, 0, 80);
  ellipse(0, 40, 150, 18);
  pop();

  stroke(25, 20, 20);
  strokeWeight(7);
  noFill();
  let tailWag = sin(frameCount * 0.05) * 10;
  bezier(-60, -10, -100, -30 + tailWag, -80, 30 + tailWag, -120, 10 + tailWag);

  noStroke();
  fill(180, 100, 25);

  push();
  translate(-45, 10);
  rotate(-walkAngle);
  rect(-7, 0, 14, 35, 6);
  pop();

  push();
  translate(40, 10);
  rotate(walkAngle);
  rect(-7, 0, 14, 35, 6);
  pop();

  fill(225, 125, 35);
  beginShape();
  vertex(-65, -10); quadraticVertex(-30, -25, 45, -15); vertex(60, 5); quadraticVertex(30, 25, -55, 15);
  endShape(CLOSE);

  fill(245, 235, 215);
  beginShape();
  vertex(-45, 12); quadraticVertex(0, 22, 40, 8); quadraticVertex(20, 16, -35, 16);
  endShape(CLOSE);

  fill(225, 125, 35);
  push();
  translate(-35, 5);
  rotate(walkAngle);
  rect(-8, 0, 16, 40, 6);
  pop();

  push();
  translate(50, 0);
  rotate(-walkAngle);
  rect(-8, 0, 16, 42, 6);
  pop();

  stroke(25, 20, 20);
  strokeWeight(3);
  line(-45, -15, -48, 5);
  line(-25, -20, -28, 10);
  line(-5, -22, -8, 12);
  line(15, -20, 12, 10);
  line(35, -15, 32, 5);

  noStroke();
  fill(225, 125, 35);
  circle(70, -10, 50);
  fill(245, 235, 215);
  circle(85, -5, 25);
  fill(25, 20, 20);
  circle(95, -8, 7);

  fill(225, 125, 35);
  circle(58, -28, 12);
  circle(78, -28, 12);
  fill(25, 20, 20);
  circle(58, -28, 6);
  circle(78, -28, 6);

  fill(255);
  circle(76, -15, 7);
  fill(0);
  circle(77, -15, 3);
  pop();
}

function drawAdvancedCub(x, y, s) {
  push();
  let walkSpeed = frameCount * 0.18;
  let walkAngle = sin(walkSpeed) * 0.45;
  let bobY = abs(sin(walkSpeed)) * 3;

  translate(x, y - bobY);
  scale(s);

  push();
  translate(0, bobY);
  noStroke();
  fill(0, 0, 0, 80);
  ellipse(0, 30, 80, 12);
  pop();

  stroke(25, 20, 20);
  strokeWeight(5);
  noFill();
  let tailWag = sin(frameCount * 0.08) * 8;
  bezier(-35, -5, -60, -20 + tailWag, -50, 20 + tailWag, -70, 5 + tailWag);

  noStroke();
  fill(180, 100, 25);

  push();
  translate(-25, 5);
  rotate(-walkAngle);
  rect(-5, 0, 10, 25, 4);
  pop();

  push();
  translate(23, 5);
  rotate(walkAngle);
  rect(-5, 0, 10, 25, 4);
  pop();

  fill(230, 130, 40);
  beginShape();
  vertex(-40, -5); quadraticVertex(-15, -15, 25, -8); vertex(35, 5); quadraticVertex(15, 18, -30, 12);
  endShape(CLOSE);

  fill(245, 235, 215);
  ellipse(-5, 10, 50, 10);

  fill(230, 130, 40);
  push();
  translate(-16, 5);
  rotate(walkAngle);
  rect(-6, 0, 12, 28, 4);
  pop();

  push();
  translate(32, 0);
  rotate(-walkAngle);
  rect(-6, 0, 12, 30, 4);
  pop();

  stroke(25, 20, 20);
  strokeWeight(2);
  line(-25, -10, -28, 5);
  line(-10, -12, -12, 8);
  line(5, -12, 3, 8);
  line(20, -10, 18, 5);

  noStroke();
  fill(230, 130, 40);
  circle(40, -8, 35);
  fill(245, 235, 215);
  circle(52, -4, 18);
  fill(25, 20, 20);
  circle(58, -6, 5);

  fill(230, 130, 40);
  circle(32, -22, 10);
  circle(48, -22, 10);
  fill(25, 20, 20);
  circle(32, -22, 4);
  circle(48, -22, 4);

  fill(255);
  circle(45, -12, 6);
  fill(0);
  circle(46, -12, 3);
  pop();
}

// ================= BHEDAGHAT WATERFALL PAGE =================
function drawBhedaghatPage() {
  background(135, 206, 235);
  push();
  let s = min(width / baseW, height / baseH);
  translate(width / 2, height / 2);
  scale(s);
  translate(-baseW / 2, -baseH / 2);

  noStroke();
  fill(255, 255, 255, 200);
  ellipse(200, 80, 120, 40);
  ellipse(230, 70, 80, 40);
  ellipse(700, 120, 150, 50);
  ellipse(740, 110, 100, 50);

  fill(70, 150, 50);
  ellipse(150, 180, 250, 200);
  ellipse(750, 150, 300, 250);

  fill(80, 170, 230);
  rect(220, 100, 460, 400);
  arc(450, 100, 460, 80, PI, TWO_PI);

  for (let i = 0; i < 45; i++) {
    let x = 230 + i * 10;
    let speed = 2 + (i % 4);
    let yOffset = (frameCount * speed + i * 35) % 400;

    stroke(255, 255, 255, 180 - (yOffset / 2.5));
    strokeWeight(2 + (i % 3));
    line(x, 100 + yOffset, x, 100 + yOffset + random(30, 70));
  }
  noStroke();

  drawAestheticRock(50, 450, 350, 250);
  drawAestheticRock(100, 300, 250, 220);
  drawAestheticRock(-20, 150, 280, 280);

  drawAestheticRock(800, 480, 380, 220);
  drawAestheticRock(750, 320, 320, 250);
  drawAestheticRock(850, 180, 280, 280);

  fill(100, 200, 60);
  ellipse(100, 220, 150, 150);
  fill(80, 170, 50);
  ellipse(40, 350, 180, 180);

  fill(100, 200, 60);
  ellipse(820, 250, 160, 160);
  fill(80, 170, 50);
  ellipse(860, 400, 200, 200);

  fill(50, 140, 30);
  triangle(60, 300, 40, 240, 90, 290);
  triangle(800, 380, 770, 320, 830, 370);

  for (let y = 480; y <= 600; y++) {
    let inter = map(y, 480, 600, 0, 1);
    let c = lerpColor(color(90, 210, 220), color(40, 150, 180), inter);
    fill(c);
    rect(0, y, 900, 1);
  }

  stroke(255, 255, 255, 120);
  strokeWeight(2);
  for (let i = 0; i < 15; i++) {
    let ripX = 100 + i * 50;
    let ripY = 520 + i * 5 + sin(frameCount * 0.05 + i) * 10;
    let ripW = 40 + sin(frameCount * 0.03 + i) * 20;
    line(ripX, ripY, ripX + ripW, ripY);
  }
  noStroke();

  fill(255, 255, 255, 220);
  for (let i = 0; i < 12; i++) {
    let fX = 230 + i * 40;
    let fY = 480 + sin(i) * 10;
    let puffSize = 70 + sin(frameCount * 0.08 + i) * 15;
    circle(fX, fY, puffSize);
  }

  fill(255, 255, 255);
  for (let i = 0; i < 25; i++) {
    let spX = 240 + i * 18 + sin(frameCount * 0.1 + i) * 10;
    let spY = 460 - abs(sin(frameCount * 0.06 + i * 3)) * 40;
    circle(spX, spY, random(4, 8));
  }

  fill(30, 40, 50);
  noStroke();
  rect(-2000, -2000, 2000, 4000);
  rect(900, -2000, 2000, 4000);
  rect(-2000, -2000, 4000, 2000);
  rect(-2000, 600, 4000, 2000);

  pop();

  fill(0, 150);
  rect(width / 2 - 120, 20, 240, 40, 10);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Bhedaghat Falls", width / 2, 48);

  fill(0, 150);
  rect(width / 2 - 150, height - 90, 300, 35, 10);
  fill(255);
  textSize(18);
  text("Press W for Boat Ride", width / 2, height - 66);

  fill(0, 150);
  rect(width / 2 - 100, height - 50, 200, 35, 10);
  fill(255);
  textSize(18);
  text("Press B to return", width / 2, height - 26);
}

function drawAestheticRock(x, y, w, h) {
  push();
  translate(x, y);

  fill(220, 190, 150);
  ellipse(0, 0, w, h);

  fill(180, 150, 110, 200);
  arc(0, 0, w, h, 0, PI + QUARTER_PI);

  fill(255, 230, 200, 150);
  arc(-w * 0.1, -h * 0.1, w * 0.7, h * 0.7, PI, TWO_PI);

  pop();
}

// ================= BOAT SCENE =================
function drawBoatScene() {
  background(210, 235, 255);

  push();
  let s = min(width / 800, height / 500);
  translate(width / 2, height / 2);
  scale(s);
  translate(-400, -250);

  if (keyIsDown(LEFT_ARROW)) boatX -= 4;
  if (keyIsDown(RIGHT_ARROW)) boatX += 4;
  if (keyIsDown(UP_ARROW)) boatY -= 3;
  if (keyIsDown(DOWN_ARROW)) boatY += 3;

  boatX = constrain(boatX, 280, 520);
  boatY = constrain(boatY, 340, 460);

  waveOffset += 3;

  background(210, 235, 255);

  fill(180, 200, 215);
  noStroke();
  beginShape();
  vertex(300, 250);
  vertex(380, 280);
  vertex(420, 280);
  vertex(500, 250);
  vertex(500, 320);
  vertex(300, 320);
  endShape(CLOSE);

  stroke(100, 90, 85);
  strokeWeight(2);

  fill(215, 210, 200);
  beginShape();
  vertex(0, 0);
  vertex(150, 0);
  vertex(180, 100);
  vertex(250, 180);
  vertex(300, 320);
  vertex(0, 350);
  endShape(CLOSE);

  fill(170, 160, 150);
  beginShape();
  vertex(0, 50);
  vertex(100, 80);
  vertex(140, 180);
  vertex(180, 330);
  vertex(0, 330);
  endShape(CLOSE);

  fill(225, 220, 210);
  beginShape();
  vertex(800, 0);
  vertex(650, 0);
  vertex(600, 120);
  vertex(520, 220);
  vertex(500, 320);
  vertex(800, 350);
  endShape(CLOSE);

  fill(185, 180, 170);
  beginShape();
  vertex(800, 100);
  vertex(680, 150);
  vertex(580, 250);
  vertex(550, 330);
  vertex(800, 330);
  endShape(CLOSE);

  fill(60, 120, 75);
  noStroke();
  triangle(40, 330, 60, 280, 80, 330);
  triangle(80, 340, 100, 290, 120, 340);
  triangle(110, 340, 130, 270, 150, 340);
  triangle(20, 120, 40, 80, 60, 120);

  triangle(720, 340, 740, 280, 760, 340);
  triangle(680, 340, 700, 290, 720, 340);
  triangle(600, 260, 620, 210, 640, 260);

  fill(130, 180, 210);
  rect(0, 320, 800, 180);

  fill(145, 195, 220);
  beginShape();
  vertex(300, 320);
  vertex(500, 320);
  vertex(800, 420);
  vertex(0, 420);
  endShape(CLOSE);

  stroke(255, 255, 255, 150);
  strokeWeight(2);
  line(250, 320 + (waveOffset % 40), 350, 320 + (waveOffset % 40));
  line(450, 340 + ((waveOffset + 20) % 50), 580, 340 + ((waveOffset + 20) % 50));
  line(150, 360 + ((waveOffset + 10) % 60), 380, 360 + ((waveOffset + 10) % 60));
  line(420, 380 + ((waveOffset + 30) % 40), 700, 380 + ((waveOffset + 30) % 40));
  line(50, 420 + (waveOffset % 70), 230, 420 + (waveOffset % 70));
  line(570, 420 + ((waveOffset + 15) % 70), 750, 420 + ((waveOffset + 15) % 70));
  line(280, 450 + ((waveOffset + 25) % 40), 520, 450 + ((waveOffset + 25) % 40));

  stroke(70, 65, 60);
  fill(140, 135, 130);
  ellipse(80, 420, 90, 50);
  ellipse(730, 440, 110, 60);

  push();
  translate(boatX, boatY);

  stroke(55, 35, 15);
  strokeWeight(3.5);
  fill(145, 95, 45);
  beginShape();
  vertex(0, 25);
  bezierVertex(-55, 22, -80, -2, -85, -15);
  vertex(-75, -15);
  bezierVertex(-40, 5, 40, 5, 75, -15);
  vertex(85, -15);
  bezierVertex(80, -2, 55, 22, 0, 25);
  endShape(CLOSE);

  line(0, 25, 0, 4);

  stroke(185, 135, 85);
  strokeWeight(3);
  line(-70, -2, -130, 10);
  line(70, -2, 130, 10);

  fill(185, 135, 85);
  noStroke();
  ellipse(-130, 10, 8, 18);
  ellipse(130, 10, 8, 18);

  stroke(0);
  strokeWeight(1);

  fill(255, 215, 165);
  ellipse(-12, -26, 12, 12);
  fill(60, 145, 85);
  rect(-21, -20, 18, 18, 3);

  fill(255, 205, 160);
  ellipse(-42, -22, 12, 12);
  fill(85, 155, 225);
  rect(-51, -16, 18, 16, 3);
  stroke(255, 205, 160);
  strokeWeight(3);
  line(-48, -10, -56, -34);

  stroke(0);
  strokeWeight(1);
  fill(255, 190, 145);
  ellipse(18, -24, 12, 12);
  fill(245, 195, 55);
  rect(8, -18, 18, 17, 3);

  pop();
  pop();

  fill(0, 160);
  rect(width / 2 - 120, 20, 240, 40, 10);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Boat Ride", width / 2, 48);

  fill(0, 160);
  rect(width / 2 - 270, height - 60, 540, 40, 10);
  fill(255);
  textSize(18);
  text("Arrow Keys: Move Boat  |  Press B to return", width / 2, height - 34);
}

// ================= KEYBOARD CONTROLS =================

function keyPressed() {
  if (currentScreen === "menu") {
    if (key === "s" || key === "S") currentScreen = "shivling";
    if (key === "t" || key === "T") currentScreen = "tiger";
    if (key === "g" || key === "G") currentScreen = "bhedaghat";
  } else if (currentScreen === "tiger") {
    if (key === "n" || key === "N") currentScreen = "jungle";
  } else if (currentScreen === "bhedaghat") {
    if (key === "w" || key === "W") currentScreen = "boat";
  }

  if (key === "b" || key === "B") currentScreen = "menu";
}

// mouse pressed 
function mouseMoved() {
  if (!musicStarted) {
    userStartAudio();
    menuMusic.loop();
    menuMusic.setVolume(0.5);
    musicStarted = true;
  }
}