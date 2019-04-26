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


pieceList = [P1, P2, P3, P4, P5, P6, P7];
nextPieces = ["0", "0", "0", "0"];


let counter = 0;
let pieces = [];
let points = 0;
let pointsDive;

var s = function (sketch) {

  sketch.setup = function () {
    const lightblue = sketch.color(51, 204, 255);
    const darkblue = sketch.color(0, 0, 255);
    const orange = sketch.color(255, 102, 0);
    const yellow = sketch.color(255, 255, 0);
    const green = sketch.color(0, 153, 0);
    const purple = sketch.color(153, 0, 255);
    const red = sketch.color(255, 0, 0);

    colors = [purple, green, red, yellow, orange, darkblue, lightblue]
    var canvas = sketch.createCanvas(200, 600);
    canvas.parent("sketchDiv")

    this.floor = new Floor();
    mainIndex = new MainIndex();



    updateNextPieces();
    updateNextPieces();
    updateNextPieces();
    updateNextPieces();
    createNewPiece(100, 0, pieceList[nextPieces[3]], colors[nextPieces[3]]);

    setInterval(movePieces, 200)



  }

  sketch.draw = function () {
    const lightblue = sketch.color(51, 204, 255);
    const darkblue = sketch.color(0, 0, 255);
    const orange = sketch.color(255, 102, 0);
    const yellow = sketch.color(255, 255, 0);
    const green = sketch.color(0, 153, 0);
    const purple = sketch.color(153, 0, 255);
    const red = sketch.color(0, 0, 255);
    sketch.background(220);
    game.floor.show();
    pieces[counter - 1].showPiece();

    if ((!pieces[counter - 1].checkNoCollisionBot() || !pieces[counter - 1].checkNoContact(sketch.floor)) && pieces[counter - 1].isDone == false) {
      mainIndex.addPiece(pieces[counter - 1].x / scale, Math.floor(pieces[counter - 1].y / scale), pieces[counter - 1].pieceIndex, pieces[counter - 1].color);
      mainIndex.createPieces();
      pieces[counter - 1].clearPiece();
      pieces[counter - 1].isDone = true;
      updateNextPieces();
      createNewPiece(100, 0, pieceList[nextPieces[3]], colors[nextPieces[3]]);
      mainIndex.detectLines();






    }
    mainIndex.showPieces();


    if (sketch.keyIsDown(40)) pieces[counter - 1].movePieceToBottom();
    //pointsDiv.html(points);
    document.getElementById("pointsDiv").innerHTML = "Punkte: " + points;

  }
}
var game = new p5(s, "sketchDiv");

function createNewPiece(x, y, index, color) {
  pieces[counter] = new Piece(x, y, index, color);
  pieces[counter].createPiece();
  counter++;

}

function movePieces() {
  for (let i = 0; i <= counter - 1; i++) {
    if (pieces[i].checkNoContact(game.floor) && pieces[i].checkNoCollisionBot()) pieces[i].movePiece();



  }
}

function keyPressed() {
  if (game.keyCode === game.UP_ARROW && pieces[counter - 1].checkNoContact(game.floor)) pieces[counter - 1].rotatePiece();
  if (game.keyCode === game.RIGHT_ARROW && pieces[counter - 1].checkNoContact(game.floor) && pieces[counter - 1].checkNoCollisionRight()) pieces[counter - 1].movePieceRight();
  if (game.keyCode === game.LEFT_ARROW && pieces[counter - 1].checkNoContact(game.floor) && pieces[counter - 1].checkNoCollisionLeft()) pieces[counter - 1].movePieceLeft();
  //if (keyCode === DOWN_ARROW && pieces[counter - 1].checkNoContact(floor)) pieces[counter - 1].movePieceToBottom();


}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateNextPieces() {
  nextPieces[3] = nextPieces[2];
  nextPieces[2] = nextPieces[1];
  nextPieces[1] = nextPieces[0];
  nextPieces[0] = getRandomIntInclusive(0,6);
}