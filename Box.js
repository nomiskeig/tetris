class Box {
<<<<<<< HEAD
    
=======
>>>>>>> 9bfbf0f72251bd6afac879946c179234da512cf5
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
