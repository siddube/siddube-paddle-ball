class Paddle {
  constructor(playerType) {
    this.playerType = playerType;
    this.width = 20;
    this.height = 150;
    this.c = color(255, 255, 0)
    if (this.playerType === 'playerOne')
      this.location = new createVector(this.width, canvas.height / 2);
    else if (this.playerType === 'playerTwo')
      this.location = new createVector(canvas.width - this.width, canvas.height / 2);
    else {
      this.location = new createVector(canvas.width - this.width, canvas.height / 2);
      this.aiSpeedY = 7.6;
      this.aiMoveBallX = 50;
    }
  }

  run() {
    this.draw();
  }

  draw() {
    fill(this.c);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

  playerMove() {
    this.location.y = mouseY;
  }
}
