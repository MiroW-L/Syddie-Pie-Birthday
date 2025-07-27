let Mez;

function preload(){
Mez = loadImage('mez closeup.jpeg');
pixelDensity();
}

function setup() {
  createCanvas(800, 800, WEBGL);
  textSize(100)
}

function draw() {
  background(220,200,20);
  orbitControl();
  let angle = millis() * 0.001;
  let axis = createVector(
    width/2,height,0
  );
  lights();
  noStroke();
  rotate(angle, axis);
  image(Mez,-20,-300,400,600);


}


