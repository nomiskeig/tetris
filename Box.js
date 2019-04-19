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

  checkNoCollisionBot() {
    //console.log(this.x/scale, this.y/scale)
    return (mainIndex.index[Math.floor(this.y/scale +1)][this.x/scale] == 0);
  }

  checkNoCollisionLeft() {
    return (mainIndex.index[Math.floor(this.y/scale)][this.x/scale -1] == 0)
  }

  checkNoCollisionRight() {
    return (mainIndex.index[Math.floor(this.y/scale)][this.x/scale +1] == 0)
  }
}
