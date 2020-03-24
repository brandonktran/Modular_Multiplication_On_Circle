let points = 500;
let width = 500;
let height = 500;
let r = 250-10;
let array = [];
let times = 1;

function setup() {
  let canvas = createCanvas(width, height);
  canvas.parent("canvasContainer");
}

function draw() {
  background(255);

  translate(width / 2, height / 2);

  let angle = 2 * Math.PI / points;
  // let times = parseInt(slider.value);

  for (let i =0; i<points; i++) {
    stroke(0);
    strokeWeight(2);
    let x = r * Math.cos(i * angle + Math.PI);
    let y = r * Math.sin(i * angle + Math.PI);
    point(x, y);
    array.push([x,y]);
  }

  for (let i=0; i<array.length; i++) {
    let newIndex = i * times % points * angle;
    let ran1 = Math.floor(map(Math.random(), 0, 1, 0, 255));
    let ran2 = Math.floor(map(Math.random(), 0, 1, 0, 255));
    let ran3 = Math.floor(map(Math.random(), 0, 1, 0, 255));
    stroke(200, ran1, ran2);
    strokeWeight(0.5);
    line(array[i][0], array[i][1], r * Math.cos(newIndex + Math.PI), r * Math.sin(newIndex + Math.PI))
  }

  stroke(0);
  noFill();
  strokeWeight(1);
  circle(0, 0, 2*r)

  array = [];
  times += 0.01;

  // noLoop();

}




var slider = document.getElementById("mFactor");
var output = document.getElementById("Factor");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
}
