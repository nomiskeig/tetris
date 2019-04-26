class Floor {
  constructor() {

    this.x = 0;
    this.y = 560;
    this.w = game.width;
    this.h = game.height - this.y;
  }

  show() {
    game.fill(0);
    game.rect(this.x, this.y, this.w, this.h);
    game.fill(255);
  }
}