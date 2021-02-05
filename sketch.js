var ball;
var database;
var position;

function setup(){
    database = firebase.database()
    var locofChild = database.ref("Car/Position")
    locofChild.on("value", readPosition, showError)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function showError(){
    console.log(" There is an Error!");
}
function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function changePosition(x,y){
    database.ref("Car/Position").set({
        x: ball.x + x,
        y: ball.y + y
    })
}
