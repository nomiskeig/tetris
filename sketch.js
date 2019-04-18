const scale = 20;
const moveSpeed = 10;
const dim = 3;
const P1 = [
  ["0", "0", "0"],
  ["1", "1", "1"],
  ["0", "1", "0"]
];
const P2 = [
  ["1", "0", "0"],
  ["1", "1", "0"],
  ["0", "1", "0"]
];
const P3 = [
  ["0", "1", "0"],
  ["1", "1", "0"],
  ["1", "0", "0"]
];
const P4 = [
  ["0", "0", "0"],
  ["1", "1", "0"],
  ["1", "1", "0"]
];
const P5 = [
  ["0", "1", "0"],
  ["0", "1", "0"],
  ["0", "1", "1"]
];
const P6 = [
  ["0", "1", "0"],
  ["0", "1", "0"],
  ["1", "1", "0"]
];
const P7 = [
  ["0", "1", "0"],
  ["0", "1", "0"],
  ["0", "1", "0"],
  ["0", "1", "0"],

];
const emptyPiece = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "0"],

];


pieceList = [P1, P2, P3, P4, P5, P6, P7]


let counter = 0;
let pieces = [];

function setup() {
  createCanvas(200, 600);
  floor = new Floor();
  mainIndex = new MainIndex();


  createNewPiece(100, 0, P5);

  setInterval(movePieces, 200)



}

function draw() {
  background(220);
  floor.show();
  //  for (let i = 0; i <= counter - 1; i++) {
  //    pieces[i].showPiece();
  //  }
  pieces[counter-1].showPiece();

  if (!pieces[counter - 1].checkNoContact(floor) && pieces[counter - 1].isDone == false) {
     mainIndex.addPiece(pieces[counter-1].x/scale, pieces[counter-1].y/scale, pieces[counter-1].pieceIndex);
     mainIndex.createPieces();
     pieces[counter-1].clearPiece();
     pieces[counter-1].isDone = true;
     whichPieceOfList = pieceList[Math.floor(Math.random() * pieceList.length)];
     createNewPiece(100, 0, whichPieceOfList);
     
     
   
    

  }
  mainIndex.showPieces();
}

function createNewPiece(x, y, index) {
  pieces[counter] = new Piece(x, y, index);
  pieces[counter].createPiece();
  counter++;

}

function movePieces() {
  for (let i = 0; i <= counter - 1; i++) {
    if (pieces[i].checkNoContact(floor)) pieces[i].movePiece();


  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && pieces[counter - 1].checkNoContact(floor)) pieces[counter - 1].rotatePiece();
  if (keyCode === RIGHT_ARROW && pieces[counter - 1].checkNoContact(floor)) pieces[counter - 1].movePieceRight();
  if (keyCode === LEFT_ARROW && pieces[counter - 1].checkNoContact(floor)) pieces[counter - 1].movePieceLeft();
  if (keyCode === DOWN_ARROW  && pieces[counter -1].checkNoContact(floor)) pieces[counter -1].movePieceToBottom(floor);


}