let time = 0;
let deltaT = 0.02;
let wave = [];
let holdx = [];
let holdy = [];

function setup() {
  createCanvas(1880, 600);
  slider = createSlider(1, 30, 2);
}

function draw() {
  // if (frameCount === 471) {
  //   capturer.start();
  // }

  background(0);
  translate(350, 300);
  let x = 0;
  let y = 0;

  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    // let sign = (-1) ** (i + 1);
    let n = i * 2 + 1;
    let radius = 35 * sq(8 / (n * PI));

    x += sign * radius * cos(n * time);
    y += sign * radius * sin(n * time);

    //flips terms in summation starting -1, 1, -1, 1
    if (i % 2 == 0) {
      x -= radius * cos(n * time);
      y -= radius * sin(n * time);
    } else {
      x += radius * cos(n * time);
      y += radius * sin(n * time);
    }

    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    strokeWeight(0.8);
    line(prevx, prevy, x, y);
    ellipse(x, y, 2);
  }
  wave.unshift(y);
  holdx.unshift(x);
  holdy.unshift(y);

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
  stroke("purple");
  strokeWeight(5);
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  if (wave.length > 1080) {
    wave.pop();
  }
  if (wave.length > 628) {
    holdx.pop();
    holdy.pop();
  }

  time += deltaT;

  // if (frameCount < 785) {
  //   capturer.capture(canvas);
  // } else if (frameCount === 785) {
  //   capturer.save();
  //   capturer.stop();
  // }
}
