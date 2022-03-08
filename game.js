let canvas;
let ball;
let paddleOne;
let paddleTwo;

function setup() {
  canvas = createCanvas(900, 600);
  background(51, 119, 255);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  textFont('Verdana');
  ball = new Ball();
  paddleOne = new Paddle('playerOne');
  paddleTwo = new Paddle('computer');
}

function draw() {
  background(51, 119, 255);
  drawCourt();
  runGame();
  ball.run();
  ball.checkColiision(paddleOne);
  ball.checkColiision(paddleTwo);
  paddleOne.run();
  paddleTwo.run();
  paddleTwo.aiMove(ball);
}

function drawCourt() {
  fill(255);
  stroke(255);
  strokeWeight(3);
  line(canvas.width / 2, 0, canvas.width / 2, canvas.height);
  noFill();
  circle(canvas.width / 2, canvas.height / 2, 100);
  noStroke();
}

function mouseMoved() {
  if (mouseY < height - paddleOne.height / 2 && mouseY > 0 + paddleOne.height / 2) {
    paddleOne.playerMove();
  }
}

function runGame() {
  ball.moveBall = true;
}
