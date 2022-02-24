Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_qaulity:99.99999


});
camera=document.getElementById("camara");
Webcam.attach('#camara');
function takesomething(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="birthday" src="'+data_uri+'">';

    });
}
console.log('ml5 check version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JABPooLxW/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded')
} 