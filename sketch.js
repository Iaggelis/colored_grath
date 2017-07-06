var fr = 10; //framerate


function setup() {
  c1 = createCanvas(600, 600);
  background(255);
  frameRate(fr);
  //noLoop();

}

function draw() {
  var radius = width / 1.05;
  beginShape();
  fill(255);
  stroke(0);
  ellipse(width / 2, height / 2, radius);
  endShape();

  var x = [];
  var y = [];
  var j = 0;
  translate(width / 2, height / 2);
  for (var i = 0; i <= 2 * PI + 2 * PI / 28; i += 2 * PI / 28) {
    //noStroke();
    stroke(0);
    x[j] = (radius / 2) * cos(i);
    y[j] = (radius / 2) * sin(i);
    ellipse(x[j], y[j], 1);
    j++;

  }

  for (var i = 0; i <= j; i++) {
    for (var k = 0; k <=i ; k++) {
      //colorMode(HSB);
      stroke(randomGaussian(0,255),randomGaussian(0,255),randomGaussian(0,255));
      beginShape();
      vertex(x[i], y[i]);
      vertex(x[k], y[k]);
      endShape();
    }
  }


}

function mousePressed() {
  saveFrames("out", "jpg", 1, 60);
}
