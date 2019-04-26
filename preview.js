var r = function (sketch1 ) {


    sketch1.setup = function() {
        sketch1.createCanvas(scale*4, scale*15)
        
        
    }

    sketch1.draw = function() {

        
        let pieceIndex1 = pieceList[nextPieces[2]];
        let pieceIndex2 = pieceList[nextPieces[1]];
        let pieceIndex3 = pieceList[nextPieces[0]];

        sketch1.clear();
        for (let i = 0; i <= pieceIndex1.length -1; i++) {
            for (let j = 0; j <= pieceIndex1[i].length- 1; j++) {
                if (pieceIndex1[i][j] == 1) {
                    sketch1.fill(colors[nextPieces[2]]);
                    sketch1.rect(j*scale, i*scale, scale, scale)
                }
                
            }
        }

        for (let i = 0; i <= pieceIndex2.length -1; i++) {
            for (let j = 0; j <= pieceIndex2[i].length- 1; j++) {
                if (pieceIndex2[i][j] == 1) {
                    sketch1.fill(colors[nextPieces[1]]);
                    sketch1.rect(j*scale, i*scale + scale*5, scale, scale)
                }
                
            }
        }

        for (let i = 0; i <= pieceIndex3.length -1; i++) {
            for (let j = 0; j <= pieceIndex3[i].length- 1; j++) {
                if (pieceIndex3[i][j] == 1) {
                    sketch1.fill(colors[nextPieces[0]]);
                    sketch1.rect(j*scale, i*scale + scale*10, scale, scale)
                }
                
            }
        }
    }

     
}

var preview = new p5(r, "previewDiv");