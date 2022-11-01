let time = 0;
let deltaT = 0.01;
let wave = [];
let square = [];
let holdx = [];
let holdy = [];

function setup() {
  createCanvas(1880, 350);
  slider = createSlider(1, 50, 4);
}

function draw() {
  // if (frameCount === 314) {
  //   capturer.start();
  // }

  background(0);
  translate(350, 175);
  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 100 * (4 / (n * PI));

    x += radius * cos(2 * n * time);
    y += radius * sin(2 * n * time);

    stroke(255);
    strokeWeight(1.5);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //draws lines between center of circle and the connecting point on parent circumference
    strokeWeight(0.8);
    line(prevx, prevy, x, y);
    //dot at center of each ellipse with width 3 px
    ellipse(x, y, 2);
  }
  wave.unshift(y);
  holdx.unshift(x);
  holdy.unshift(y);

  if (y >= 0) {
    square.unshift(100);
  } else {
    square.unshift(-100);
  }

  //traces shape of terminal point around main circle array
  beginShape();
  strokeWeight(2.5);
  stroke("pink");
  for (let i = 0; i < wave.length; i++) {
    vertex(holdx[i], holdy[i]);
  }
  endShape();

  translate(400, 0);
  stroke(255);
  strokeWeight(1.5);
  line(x - 400, y, 0, wave[0]);

  beginShape();
  noFill();
  stroke("#999999");
  strokeWeight(2.5);
  for (let i = 0; i < wave.length; i++) {
    vertex(i, square[i]);
  }
  endShape();

  beginShape();
  noFill();
  stroke("cyan");
  strokeWeight(2);
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  if (wave.length > 1080) {
    wave.pop();
    square.pop();
  }
  if (wave.length > 314) {
    holdx.pop();
    holdy.pop();
  }

  time += deltaT;

  // if (frameCount < 628) {
  //   capturer.capture(canvas);
  // } else if (frameCount === 628) {
  //   capturer.save();
  //   capturer.stop();
  // }
}
