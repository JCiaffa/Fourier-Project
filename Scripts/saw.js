let time = 0;
let deltaT = 0.02;
let wave = [];
let holdx = [];
let holdy = [];

function setup() {
  createCanvas(1880, 625);
  slider = createSlider(2, 40, 6);
}

function draw() {
  // if (frameCount === 314) {
  //   capturer.start();
  // }

  background(0);
  translate(500, 300);
  let x = 0;
  let y = 0;

  for (let i = 1; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let radius = 100 * (4 / (i * PI));

    if (i % 2 == 0) {
      x -= radius * cos(i * time);
      y -= radius * sin(i * time);
    } else {
      x += radius * cos(i * time);
      y += radius * sin(i * time);
    }

    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    //draws lines between center of circle and the connecting point on parent circumference
    strokeWeight(0.8);
    line(prevx, prevy, x, y);
    //dot at center of each ellipse with width 2 px
    ellipse(x, y, 2);
  }
  wave.unshift(y);
  holdx.unshift(x);
  holdy.unshift(y);

  // for (var i = 1; i <= 628; i++) {
  //   if (i <= 313) {
  //     saw.unshift(1.4 * i - 215);
  //   }
  // }

  //traces shape of terminal point around main circle array
  beginShape();
  strokeWeight(2.5);
  stroke("pink");
  for (let i = 0; i < wave.length; i++) {
    vertex(holdx[i], holdy[i]);
  }
  endShape();

  translate(300, 0);
  stroke(255);
  strokeWeight(1.5);
  line(x - 300, y, 0, wave[0]);

  beginShape();
  noFill();
  stroke("yellow");
  strokeWeight(4);
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  if (wave.length > 980) {
    wave.pop();
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
