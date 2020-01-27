var paddle1, paddle2;
var paddle1V,paddle2V;
var p1Score,var2Score;
var ball, ballV;


function setup()
{
    createCanvas(600, 400);
    paddle1 = height/2 - 50;
    paddle2 = height/2 - 50;
    paddle1V=paddle2V=0;
    p1Score=p2Score=0;
    textAlign(CENTER);
    textSize(30);
    ball = createVector(width/2, height/2);
    ballV = createVector(random(4), random(4));

}
function draw()
{
    background(138,43,226);

    rect(20,paddle1,10,100);
    rect(width-30,paddle2,10,100);

    ellipse(ball.x,ball.y,20);

    text(p1Score + "|" + p2Score, width/2,50);
    handleMovement();
    handleBall();

}

function handleBall()
{

    ball.x+=ballV.x;
    ball.y+=ballV.y;

    if(ball.y>height || ball.y<0)
    {
        ballV.y=-ballV.y;
    }

    if(ball.x<=30 )
    {
        /*if(ball.x>=20)
        {
            
        }*/
        if(ball.y>paddle1 && ball.y<paddle1+100)
        {
            ballV.x=-ballV.x;
        }
        else
        {
            p2Score++;
            reset();
            return;
        }
       
    }
    else if(ball.x >=width - 30)  
    {
        /*if(ball.x<=width-20)
        {
           
        }*/
        if(ball.y > paddle2 && ball.y < paddle2+100)
        {
            ballV.x=-ballV.x;
        }
        else
        {
            p1Score++;
            reset();
            return;
        }
    }
    
    
}

function reset()
{
    ball = createVector(width/2,height/2);
}
function handleMovement()
{
    if(keyIsDown(87))
    {
        paddle1V=paddle1V-5;
    }
    else if(keyIsDown(83))
    {
        paddle1V=paddle1V+5;
    }

    if(keyIsDown(UP_ARROW))
    {
        paddle2V=paddle2V-5;
    }
    else if(keyIsDown(DOWN_ARROW))
    {
        paddle2V=paddle2V+5;
    }

    paddle1+=paddle1V;
    paddle2+=paddle2V;

    paddle1V*=0.4;
    paddle2V*=0.4;
    
    paddle1 = constrain(paddle1,0,height - 100);
    paddle2 = constrain(paddle2,0,height - 100);

}