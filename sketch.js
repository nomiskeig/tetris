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
  const lightblue = color(51, 204, 255);
  const darkblue = color(0, 0, 255);
  const orange = color(255, 102, 0);
  const yellow = color(255, 255, 0);
  const green = color(0, 153, 0);
  const purple = color(153, 0, 255);
  const red = color(255, 0, 0);

  colors = [purple, green, red, yellow, orange, darkblue, lightblue]
  createCanvas(200, 600);
  floor = new Floor();
  mainIndex = new MainIndex();


  whichPiece = getRandomIntInclusive(0,6)
  createNewPiece(100, 0, pieceList[whichPiece], colors[whichPiece]);
  //console.log(pieceList[whichPiece], colors[whichPiece])

  setInterval(movePieces, 200)



}

function draw() {
  const lightblue = color(51, 204, 255);
  const darkblue = color(0, 0, 255);
  const orange = color(255, 102, 0);
  const yellow = color(255, 255, 0);
  const green = color(0, 153, 0);
  const purple = color(153, 0, 255);
  const red = color(0, 0, 255);
  background(220);
  floor.show();
  //  for (let i = 0; i <= counter - 1; i++) {
  //    pieces[i].showPiece();
  //  }
  pieces[counter - 1].showPiece();

  if ((!pieces[counter - 1].checkNoCollisionBot() || !pieces[counter - 1].checkNoContact(floor)) && pieces[counter - 1].isDone == false) {
    mainIndex.addPiece(pieces[counter - 1].x / scale, Math.floor(pieces[counter - 1].y / scale), pieces[counter - 1].pieceIndex, pieces[counter - 1].color);
    mainIndex.createPieces();
    pieces[counter - 1].clearPiece();
    pieces[counter - 1].isDone = true;
    whichPiece = getRandomIntInclusive(0,6)
    createNewPiece(100, 0, pieceList[whichPiece], colors[whichPiece]);
    //console.log(pieceList[whichPiece], colors[whichPiece])
    mainIndex.detectLines();






  }
  mainIndex.showPieces();
  
  if (keyIsDown(40)) pieces[counter-1].movePieceToBottom();
}

function createNewPiece(x, y, index, color) {
  pieces[counter] = new Piece(x, y, index, color);
  pieces[counter].createPiece();
  counter++;

}

function movePieces() {
  for (let i = 0; i <= counter - 1; i++) {
    if (pieces[i].checkNoContact(floor) && pieces[i].checkNoCollisionBot()) pieces[i].movePiece();



  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && pieces[counter - 1].checkNoContact(floor)) pieces[counter - 1].rotatePiece();
  if (keyCode === RIGHT_ARROW && pieces[counter - 1].checkNoContact(floor) && pieces[counter - 1].checkNoCollisionRight()) pieces[counter - 1].movePieceRight();
  if (keyCode === LEFT_ARROW && pieces[counter - 1].checkNoContact(floor) && pieces[counter - 1].checkNoCollisionLeft()) pieces[counter - 1].movePieceLeft();
  //if (keyCode === DOWN_ARROW && pieces[counter - 1].checkNoContact(floor)) pieces[counter - 1].movePieceToBottom();


}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min; 
}