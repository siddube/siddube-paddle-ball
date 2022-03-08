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
    this.checkBounds();
  }

  draw() {
    fill(this.c);
    ellipse(this.location.x, this.location.y, this.size);
  }

  move() {
    if (this.moveBall)
      this.location.add(this.velocity);
  }

  checkBounds() {
    if (this.location.y < 0 + this.size / 2 || this.location.y > canvas.height - this.size / 2)
      this.velocity.y *= -1;
    if (this.location.x < 0 + this.size / 2 || this.location.x > canvas.width - this.size / 2)
      this.velocity.x *= -1;
  }
}
