let ball_x = 100;
let ball_y = 100;

let directionX = 5;
let directionY = 5;

let speed = 7; //constant (but more fun to change)

let score;
let promptText = "Try To Win";

let paddle_width = 150; //constant
let paddle_height = 30; //constant

function setup() {
  createCanvas(1440, 900);
  rectMode(CENTER);
  resetGame("Start");
}

function resetGame(input){
  score = 0;
  promptText = input;
}

function draw() {
  background(220);
  ballBounce();

  paddle();
  text(score,10,10);
  if (score >=5) {
    resetGame("Win")
  }
  text(promptText, 10,30);
 
}



function paddle() {
  //bounce off paddle
  if (ball_y < paddle_height &&
    ball_x > mouseX - paddle_width / 2 &&
    ball_x < mouseX + paddle_width / 2) {
    directionY = -directionY
    score++;
  }

  //draw paddle
  fill(25,150,170);
  rect(mouseX, paddle_height / 2, paddle_width, paddle_height);
}

function ballBounce() {

  ellipse(ball_x, ball_y, 20, 20);
  ball_x += directionX * speed ;
  ball_y += directionY * speed;

  //bounce off walls
  if (ball_x >= width || ball_x <= 0) {
    directionX = -directionX
  }
  if (ball_y >= height || ball_y <= 0) {
    directionY = -directionY
  }
}