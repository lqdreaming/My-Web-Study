function fireworks(){
 var d=document.getElementById("myCanvas");
 var ctx=d.getContext("2d");
 var balls=[];
 function getRandom(a,b){
     return (a+Math.floor(Math.random()*(b-a+1)))
 }
   function Vector2(x,y){
    this.x=x;
    this.y=y;
    }
   function initBall(){
    for(var i=0;i<500;i++){
    var ball={
             position:new Vector2(300,250),
             r:2,
             v:getRandom(3,200),
             direction:(getRandom(0,360)/360)*2*Math.PI
    };
    balls.push(ball);
    }
    }
    var t=0;
//指定毫秒后，触发事件。
    var cyc=50;
    function tick(){
    var ballColor=randomColor();
    // alert(ballColor);
     t+=cyc;
     
     ctx.fillStyle="rgba(0,0,0,3)";
     ctx.fillRect(0,0,d.width,d.height);
     ctx.fillStyle=ballColor;
//一定时间后，要重新发送
     if(t>2000){
      t=0;
      balls.length=0;
      initBall();
      ctx.globalAlpha=1;
      ctx.fillStyle="#000000";
      ctx.fillRect(0,0,d.width,d.height);
     
      }
//透明度，离爆炸中心越远，透明度越低
     ctx.globalAlpha=(2000-t)/2000;
    for(var i=0;i<balls.length;i++){
      ctx.beginPath();
      ctx.arc(balls[i].position.x,balls[i].position.y,balls[i].r,0,Math.PI*2,true);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      balls[i].position.x+=balls[i].v*Math.cos(balls[i].direction)*cyc/1000;
      balls[i].position.y+=balls[i].v*Math.sin(balls[i].direction)*cyc/1000;
      
    }
    }
    initBall();
    //tick();
    setInterval(tick,cyc);
    function randomColor(){
    var arrHex=["#FFFF00","#ADFF2F","#8DEEEE","#00FF00","#EE6AA7","#E0FFFF","#FFFFFF"];
   var strHex="#";
    var index=Math.round(Math.random()*6);
    //alert(index);
    return arrHex[index];
    }
 } 