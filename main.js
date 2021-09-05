var head_x = 0;
var head_y = 0;

function preload(){
    head = loadImage('https://i.postimg.cc/BvpZvwZ5/h.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(530,200);
    video = createCapture(VIDEO);   
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        head_x = results[0].pose.nose.x-60;
        head_y = results[0].pose.nose.y-170;

        console.log("Head_x = " + head_x);
        console.log("Head_y = " + head_y);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized!!");
}

function draw(){
    image(video,0,0,300,300);
    image(head,head_x,head_y,100,100);
}

function takeSnapshot(){
    save('My_filter_Image.png');
}