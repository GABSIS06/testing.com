var compteurImage=1;
var totalimage=6;

function slider(x){
    var image=document.getElementById("img");
    compteurImage=compteurImage + x;
    image.src="tof"+compteurImage+".jpg";
    if(compteurImage>=totalimage){
        compteurImage=1;
    }
    if(compteurImage<1){
        compteurImage=totalimage;
    }
}

function sliderAuto(){
    var image=document.getElementById("img");
    compteurImage=compteurImage + 1;
    image.src="tof"+compteurImage+".jpg";
    if(compteurImage>=totalimage){
        compteurImage=1;
    }
    if(compteurImage<1){
        compteurImage=totalimage;
    }
}
window.setInterval(sliderAuto,3000);