class MainIndex {
    constructor() {
        this.x;
        this.y;
        this.pieceIndex;
        this.pieces = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
        this.index = [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",],
        ];
    }

    addPiece(x, y, pieceIndex, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.pieceIndex = pieceIndex;
        for (let i = 0; i <= this.pieceIndex.length - 1; i++) {
            for (let j = 0; j <= this.pieceIndex[i].length - 1; j++) {
                if (this.pieceIndex[i][j] == 1) {
                    this.index[i + this.y][j + this.x] = 1;
                    //console.log("i = " + i, "j = " + j)
                }
            }
        }
        // console.log(this.index);
    }

    createPieces() {
        for (let i = 0; i <= this.index.length - 1; i++) {
            for (let j = 0; j <= this.index[i].length - 1; j++) {
                if (this.index[i][j] == 1 && !this.pieces[i][j]) {
                    this.pieces[i][j] = new Box(j * scale, i * scale, this.color);
                    // console.log(this.pieces[i][j].x, this.pieces[i][j].y);
                }
            }
        }

    }

    showPieces() {
        for (let i = 0; i <= this.pieces.length - 1; i++) {
            for (let j = 0; j <= this.pieces[i].length - 1; j++) {
                if (this.pieces[i][j]) {
                    //console.log("sollte angezeigt werden");
                    this.pieces[i][j].show();
                }
            }
        }

    }

    detectLines() {
    let counter;
    let line;
    let i;
        for (i = 0; i <= this.pieces.length - 1; i++) {
            counter = 0;
            for (let j = 0; j <= this.pieces[i].length - 1; j++) {
                if (this.index[i][j] == 1) counter++;
            }

            if (counter == 10) {
                line = i;
                console.log("reihe voll")
                this.removeLines(line)
            }
        }
        
    }

     

    removeLines(line) {
        
        for (let j = 0; j <= 9; j++) {
                //console.log("ok " + j)
                //console.log("j <" + this.pieces[line_].length)
                this.index[line][j] = 0;
                this.pieces[line][j] = null;
            }
        //console.log("reihe sollte entfernt sein")
        this.moveLines(line)
    }

    moveLines(line) {
        for (let i = 0; i <= line -1; i++) {
            for (let j = 0; j <= 9; j++) {
               // console.log(line-i, j)
                this.index[line-i][j] = this.index[line-i-1][j];  
                //if (this.pieces[i][j]) this.pieces[i][j].y += scale;
                if (this.pieces[line-i-1][j]) {
                    this.pieces[line-i-1][j].y += scale;
                    this.pieces[line-i][j] = this.pieces[line-i-1][j];
                }
                else this.pieces[line-i][j] = null;

            }
            this.index[0][i] = 0;           
        }
        //console.log(this.index)
        points += 100;
    }
}



