LipPinkX = 0;
LipPinkY = 0;


function preload(){

lipthingy = loadImage("LIp.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        LipPinkX = results[0].pose.nose.x-21;
        LipPinkY = results[0].pose.nose.y+8;
        console.log("nose X =" + LipPinkX );
        console.log("nose Y =" + LipPinkY );
       
    }

}
function draw()
{
 image(video,0,0,300,300);

image(lipthingy,50,50);
}
function take_snapshot(){
    save("PINK.png");
}
function modelLoaded(){
    console.log("LipPink is loaded");
}