class Piece {

  constructor(x, y, pieceIndex, color) {
    this.x = x;
    this.y = y;
    this.h = 0;
    this.temph = 0;
    this.isDone = false;
    this.color = color;
    this.pieceIndex = pieceIndex;
    this.heigthDifference = 0;
    this.piece = [
      [],
      [],
      [],
      []
    ];
    this.newPieceIndex = [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"]
    ];

  }

  createPiece() {


    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      //this.h += scale;
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        // console.log(this.PieceIndex[i].length)
        if (this.pieceIndex[i][j] == 1) {
          this.piece[i][j] = new Box(j * scale + this.x, i * scale + this.y, this.color);



        }
      }
    }
    this.h = this.getPieceHeight();
  }

  showPiece() {

    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          this.piece[i][j].show();

        }
      }
    }
  }

  movePiece() {

    this.y += moveSpeed;
    //console.log(this.y)
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          this.piece[i][j].moveBoxDown();


        }
      }
    }

  }


  createRotatedIndex() {


    if (this.pieceIndex[0][0] == "1") this.newPieceIndex[0][2] = "1";
    if (this.pieceIndex[0][1] == "1") this.newPieceIndex[1][2] = "1";
    if (this.pieceIndex[0][2] == "1") this.newPieceIndex[2][2] = "1";
    if (this.pieceIndex[1][0] == "1") this.newPieceIndex[0][1] = "1";
    if (this.pieceIndex[1][1] == "1") this.newPieceIndex[1][1] = "1";
    if (this.pieceIndex[1][2] == "1") this.newPieceIndex[2][1] = "1";
    if (this.pieceIndex[2][0] == "1") this.newPieceIndex[0][0] = "1";
    if (this.pieceIndex[2][1] == "1") this.newPieceIndex[1][0] = "1";
    if (this.pieceIndex[2][2] == "1") this.newPieceIndex[2][0] = "1";

  }

  normalizeNewPieceIndex() {
    for (let i = 0; i <= this.newPieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.newPieceIndex[i].length - 1; j++) {
        this.pieceIndex[i][j] = this.newPieceIndex[i][j];
        this.newPieceIndex[i][j] = "0";

      }
    }
  }


  rotatePiece() {

    this.createRotatedIndex();
    if (this.x == 8*scale) this.x -= scale;
    if (this.x == -scale) this.x += scale;

    for (let i = 0; i <= this.newPieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.newPieceIndex[i].length - 1; j++) {
        // console.log(this.PieceIndex[i].length)
        if (this.piece[i][j]) this.piece[i][j] = null;
        if (this.newPieceIndex[i][j] == 1) {
          this.piece[i][j] = new Box(j * scale + this.x, i * scale + this.y, this.color);


        }
      }
    }
    this.normalizeNewPieceIndex();
    this.h = this.getPieceHeight();
  }

  movePieceRight() {
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          this.piece[i][j].moveBoxRight();

        }
      }
    }
    this.x += scale;
  }


  movePieceLeft() {
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          this.piece[i][j].moveBoxLeft();

        }
      }
    }
    this.x -= scale;
  }

  // movePieceToBottom() {

  //   while (this.checkNoContact(floor) && this.checkNoCollisionBot()) {
  //     for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
  //       for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
  //         if (this.piece[i][j]) {
  //           console.log("gemovt");
  //           this.piece[i][j].moveBoxToBottom(scale);
  
  //         }
  //       }
  
  //     }
  //     this.y += scale;

  //   }
  // }

  movePieceToBottom() {

    if (this.checkNoContact(game.floor) && this.checkNoCollisionBot()) {
      for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
        for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
          if (this.piece[i][j]) {
            //console.log("gemovt");
            this.piece[i][j].moveBoxToBottom(scale);
  
          }
        }
  
      }
      this.y += scale;

    }
  }


  checkNoContact(other) {

    return (this.y + this.h < other.y);

  }

  getPieceHeight() {
    this.temph = 0;
    for (let i = 0; i <= this.pieceIndex.length - 1; i++)
      if (this.pieceIndex[i][0] == "1" || this.pieceIndex[i][1] == "1" || this.pieceIndex[i][2] == "1") this.temph += scale;


    if (this.pieceIndex[0][0] == "0" && this.pieceIndex[0][1] == "0" && this.pieceIndex[0][2] == "0") this.temph += scale;
    //console.log("PieceHeigt = " + this.temph)
    return this.temph;

  }

  clearPiece() {
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) this.piece[i][j] = null;
      }
    }
  }

  checkNoCollisionBot() {
    let noCollision = true;
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          //console.log("wird gecheckt");
          if (!this.piece[i][j].checkNoCollisionBot()) noCollision = false;
        }
      }
    }
    //console.log("noCollision = " + noCollision)
    return noCollision;
  }

  checkNoCollisionLeft() {
    let noCollision = true;
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          //console.log("wird gecheckt");
          if (!this.piece[i][j].checkNoCollisionLeft()) noCollision = false;
        }
      }
    }
    //console.log("noCollision Links = " + noCollision)
    return noCollision;
  }

  checkNoCollisionRight() {
    let noCollision = true;
    for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
      for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
        if (this.piece[i][j]) {
          //console.log("wird gecheckt");
          if (!this.piece[i][j].checkNoCollisionRight()) noCollision = false;
        }
      }
    }
    //console.log("noCollision Rechts = " + noCollision)
    return noCollision;
  }
}