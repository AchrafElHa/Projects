let pg;
function setup() {
  createCanvas(400, 400);
  background(220);
}
function upload(){
	const selectedFile = document.getElementById('image_upload');
    const myImageFile = selectedFile.files[0];
    let urlOfImageFile = URL.createObjectURL(myImageFile);//create an URL of the image file
	let imageObject = loadImage(urlOfImageFile);
	image(imageObject ,0,0);
	console.log(imageObject);
}