function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(340,250);
    video=createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video,0,0,640,480);
}

function circle(){
    circle(30, 30, 20);
    describe('purple circle with white outline in the mid of canvas');
    }

function ellipse(){
    ellipse(56, 46, 55, 55);
    describe('white ellipse with black outline in middle of canvas');
} 

function rect(){
    rect(30, 20, 55, 55);
    describe('yellow rect with white outline in mid-right of canvas');
}

function take_snapshot(){
    save('YourCoolPicture.png');
}


