Webcam.set({
    width: 350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.verision);

classifier = ml5.imageClassifer("https://teachablemachine.withgoogle.com/models/model.json",modelLoaded)//INSERT LINK

function modelLoaded() {
console.log(' Model Loaded')
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
    
    prediction_1 = results[0].label
    prediction_2 = results[1].label

        speak();
    if(results[0].label == "Okay")
    {
        document.getElementById("update_emoji").innerHTML = "&#128076;";
    }
    if(results[0].label == "Sad")
    {
        document.getElementById("update_emoji").innerHTML = "&#128080;";
    }
    if(results[0].label == "Thumbs Up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
}}