const GRID_SIZE = 20;
let headX = 40;
let headY = 40;
//let foodX;
//let foodY;
//let numberOfCells = width / GRID_SIZE;
//let randomCell = random(numberOfCells);
//let randomCellFloor = floor(randomCell);

function setup() {
    createCanvas(600, 600);

    //foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
    //foodY = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
    frameRate(7);
}

function draw() {
    background(0);
    fill(255);
    rect(headX, headY, GRID_SIZE, GRID_SIZE);

    headX += GRID_SIZE;

    if (headX >= width) {
        headX = width - GRID_SIZE;
    }

    
    }
       
        
    
    






