difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 550);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);
     
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results )
{
    if (results.length > 0) {

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = Math.floor(leftWristX - rightWristX);

console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
}
}


function draw()
{
    background('#969A97');

    document.getElementById("font_size").innerHTML = "Font size of the text will be ="+difference+"px";
    fill('#F90093');
    text('Vivaan', 50,400 );
    textSize(difference);
}