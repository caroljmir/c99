var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);


}

setTimeout() (function{
    imgId = selfie1;
    takeSelfie();
    speakData = "Tirando selfie em 5 segundos"
    var utterThis = new SpeechSynthesisUtterance (speakData);
    synth.speak(utterThis);
    
    }, 5000);

    setTimeout() (function{
        imgId = selfie2;
        takeSelfie();
        speakData = "Tirando selfie em 10 segundos"
        var utterThis = new SpeechSynthesisUtterance (speakData);
        synth.speak(utterThis);
    
    }, 10000);
    
    setTimeout() (function{
        imgId = selfie3;
        takeSelfie();
        speakData = "Tirando selfie em 10 segundos"
        var utterThis = new SpeechSynthesisUtterance (speakData);
        synth.speak(utterThis);
    
    }, 15000);

    function takeSelfie(){
    console.log(imgId);
    Webcam.snap(data_uri);
    if(imgId == "selfie1"){
    document.getElementsById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';}
    if (imgId == "selfie2"){
    document.getElementsById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if (imgId == "selfie3"){
        document.getElementsById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }
}
