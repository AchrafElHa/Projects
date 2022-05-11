function setup() {
  let canvas = createCanvas(400, 400);
  background(220);
  canvas.parent('canvas');
  canvas.style("margin","0.5vw");
}
var imageObject ;
//uploading the image and resizing it to 400X400
function upload(){
  const selectedFile = document.getElementById('image_upload');
  const myImageFile = selectedFile.files[0];
  let urlOfImageFile = URL.createObjectURL(myImageFile);//create an URL of the image file
  imageObject = loadImage(urlOfImageFile, () => {image(imageObject,0,0,400,imageObject.height*400/imageObject.width);});
  document.getElementById("convert_button").style.display="block";
  //displaying image after scaling image to the width of the canvas
}

//function the main work is done here
function convert(){
  let letter_size = parseInt(document.getElementById("range_button").value);
  console.log(letter_size);
  let buffer_img = createGraphics(400,400);//creating an invisible buffer canvas
  buffer_img.background(255);
  buffer_img.textSize(letter_size);
  loadPixels();
  let letters_by_luminosity = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`\' ';
  const len = letters_by_luminosity.length ;
  if (document.getElementById("black_radio").checked){
	  buffer_img.background(0);
	  letters_by_luminosity = (letters_by_luminosity.split("").reverse()).join("");
	  buffer_img.fill(255);
  }
  
  for (let i=0;i<400;i+=letter_size){
	  for (let j=0;j<400;j+=letter_size){
		  let a = Math.round((pixels[4*(i*400+j)]+pixels[4*(i*400+j)+1]+pixels[4*(i*400+j)+2])*len/(3*255)-1);
		  buffer_img.text(letters_by_luminosity[a],j,i); 
	  }
  }
  image(buffer_img,0,0,400,400);
}
