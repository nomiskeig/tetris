class Floor {
  constructor() {

    this.x = 0;
    this.y = 560;
    this.w = width;
    this.h = height - this.y;
  }

  show() {
    fill(0);
    rect(this.x, this.y, this.w, this.h);
    fill(255);
  }
}