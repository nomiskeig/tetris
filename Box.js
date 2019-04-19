class Box {
    
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  



  }

  show() {
    fill(this.color);
    rect(this.x, this.y, scale, scale);
    //fill(0);
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
