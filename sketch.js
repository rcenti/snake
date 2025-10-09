const GRID_SIZE = 20;
let headX = 40;
let headY = 40;
let foodX;
let foodY;
let numberOfCells = 600 / GRID_SIZE;
let randomCell ; 
let randomCellFloor; 

function setup() {
    createCanvas(600, 600);
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);
       foodX = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
       foodY = randomCellFloor * GRID_SIZE + GRID_SIZE / 2;
    frameRate(7);
    
}

function draw() {
    background(0);
    snake();
    ellipse(foodX, foodY, GRID_SIZE, GRID_SIZE);
    }
    
function snake() {
    fill(255);

    rect(headX, headY, GRID_SIZE, GRID_SIZE);
    headX += GRID_SIZE;

    if (headX >= width) {
        headX = width - GRID_SIZE;
    }

}
        

function food() {

}
    
    






