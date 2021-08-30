function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(570,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoeses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}

function gotPoeses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() 
{
    background('#B7E9F7');
}