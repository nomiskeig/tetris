class Box {
  constructor(x, y, ) {
    this.x = x;
    this.y = y;
  



  }

  show() {
  
    rect(this.x, this.y, scale, scale);
  }

  moveBoxDown() {
    this.y += moveSpeed;
  }
  
  moveBoxRight() {
    this.x += scale;
  }
  
  moveBoxLeft() {
    this.x -= scale;
  }

  moveBoxToBottom(difference) {
    this.y += difference;

  }
}
