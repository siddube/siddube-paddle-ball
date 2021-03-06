class Ball {
  constructor() {
    this.size = 32;
    this.c = color(255, 0, 255);
    this.location = new createVector(canvas.width / 2, canvas.height / 2);
    this.velocity = new createVector(-10, 10);
    this.moveBall = false;
  }

  run() {
    this.draw();
    this.move();
    this.checkVerticalBounds();
  }

  draw() {
    fill(this.c);
    ellipse(this.location.x, this.location.y, this.size);
  }

  move() {
    if (this.moveBall)
      this.location.add(this.velocity);
  }

  checkVerticalBounds() {
    if (this.location.y < 0 + this.size / 2 || this.location.y > canvas.height - this.size / 2)
      this.velocity.y *= -1;
  }

  checkColiision(paddle) {
    let paddleBallX;
    if (paddle.playerType === 'playerOne')
      paddleBallX = paddle.location.x + paddle.width;
    else
      paddleBallX = paddle.location.x - paddle.width;

    if (paddleBallX === this.location.x && paddle.location.y - this.location.y > -paddle.height / 2 && paddle.location.y - this.location.y < paddle.height / 2)
      this.velocity.x *= -1;
  }
}
