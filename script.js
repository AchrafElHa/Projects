function setup() {
  canvas = createCanvas(400, 400);
  background(220);
  canvas.parent('canvas');
  canvas.style("margin","0.5vw");
}
var imageObject ;
function upload(){
  const selectedFile = document.getElementById('image_upload');
  const myImageFile = selectedFile.files[0];
  let urlOfImageFile = URL.createObjectURL(myImageFile);//create an URL of the image file
  imageObject = loadImage(urlOfImageFile, () => {image(imageObject,0,0,400,imageObject.height*400/imageObject.width);});
  //displaying image after scaling image to the width of the canvas
}
function convert(){
  let buffer_img = createGraphics(2000,2000);//creating an invisible buffer canvas
  buffer_img.background(255);
  buffer_img.textSize(6);
  loadPixels();
  const letters_by_luminosity = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`\'.';
  const len = letters_by_luminosity.length ;
  console.log(pixels.length,pixelDensity());
  
  for (let i=0;i<400;i+=6){
	  for (let j=0;j<400;j+=6){
		  let a = Math.round((pixels[4*(i*400+j)]+pixels[4*(i*400+j)+1]+pixels[4*(i*400+j)+2])*len/(3*255)-1);
		  buffer_img.text(letters_by_luminosity[a],j,i); 
	  }
  }
  image(buffer_img,0,0,2000,2000);
}
