var vidas = 3; 
var pontos = 0;  

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0); 
  textSize(20);
  fill(135,206,235);
  text("Vidas: "+vidas, 20, 60);
  text("Pontos: "+pontos, 20, 90);
}
