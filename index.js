

window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

var quadro = function(posx, posy, altura, largura, cor) {
  if (posx === undefined) {
    posx = 1;
  }
  if (posy === undefined) {
    posy = 1;
  }
  if (altura === undefined) {
    altura = 1;
  }
  if (largura === undefined) {
    largura = 1;
  }
  if (cor === undefined) {
    cor = "#fff";
  }
  context.fillStyle =cor;
  
  context.fillRect(posx + 5, posy + 5, altura + 5, largura + 5);
};
var bola = function(posx, posy, tamanho, cor) {
  if (posx === undefined) {
    posx = 1;
  }
  if (posy === undefined) {
    posy = 1;
  }
  if (tamanho === undefined) {
    tamanho = 1;
  }
  if (cor === undefined) {
    cor = "#fff";
  }
  context.beginPath();
  context.arc(10 + posx, 10 + posy, 10 + tamanho, 0, 2 * Math.PI);

  
  context.closePath();
  context.fillStyle =cor;
  context.fill();
};
var bolabreta = function(posx, posy, tamanho, cor,b1,b2) {
  if (b1 === undefined) {
    b1 = 0;
  }
  if (b2 === undefined) {
    b2 = 0;
  }
  if (posx === undefined) {
    posx = 1;
  }
  if (posy === undefined) {
    posy = 1;
  }
  if (tamanho === undefined) {
    tamanho = 1;
  }
  if (cor === undefined) {
    cor = "#fff";
  }
  context.beginPath();
  context.arc(10 + posx, 10 + posy, 10 + tamanho,b1+ 0*Math.PI, b2+2*Math.PI);
 context.lineTo(10+ posx, 10 + posy);
  
  context.closePath();
  context.fillStyle =cor;
  context.fill();
};

var linha = function(x1, y1, x2, y2, cor, tamanho) {
  if (cor === undefined) {
    cor = "#EBF1FA";
  }
  if (tamanho === undefined) {
    tamanho = 1;
  }
  context.lineWidth = tamanho;
  context.strokeStyle = cor;
  context.moveTo(10 + x1, 10 + y1);
  context.lineTo(15 + x2, 10 + y2);
  context.fillStyle =cor;
  context.fill();
  context.stroke();
}

var tria = function(x, y, cor,ac1){
  
  if (x === undefined) {
    x = 1;
  }
  if (y === undefined) {
    y = 1;
  }
  if (ac1 === undefined) {
    ac1 = 0;
  }
  
  if (cor === undefined) {
    cor = "#fff";
  }
  context.beginPath();
  
  context.moveTo(21+x+ac1,35+y);
    context.lineTo(5+x+ac1,35+y);
    context.lineTo(13+x+ac1,25+y);
    
  context.fillStyle =cor;
  context.fill();
  context.closePath();
    
  
}

var escreva = function(texto, posx, posy, cor, fonte) {
  if (posx === undefined) {
    posx = 1;
  }
  if (posy === undefined) {
    posy = 1;
  }
  if (cor === undefined) {
    cor = "#EBF1FA";
  }
  if (fonte === undefined) {
    fonte = "20px arial";
  }
  context.font = fonte;
  
  context.fillStyle = cor;
  context.fill();
  
  context.fillText(texto, 1 + posx, 11 + posy);
}

var blinky=function(x, y,z){
  
  quadro(x+13,y+78,49,24,'#ff0202');
  bola(x+35,y+75,17,'#ff0202');
  tria(x+15,y+78,'#000');
  tria(x+15,y+78,'#000',16);
  tria(x+15,y+78,'#000',33);
  bola(x+25,y+70,-2,'#fff');
  bola(x+45,y+70,-2,'#fff');
  bola(x+25+z,y+70,-7,'#000');
  bola(x+45,y+70,-7,'#000');
  
};


var cenario =function(){
linha(0,40,-5,500,"#010096",3); 
linha(0,40,500,40,"#010096",3);
linha(503,40,500,500,"#010096",3); 
linha(0,500,500,500,"#010096",3);
  quadro(85,125,130,290,'#010096');
  quadro(90,130,120,280,'#000');
  quadro(295,125,130,100 ,'#010096');
  quadro(300,130,120,90 ,'#000');
  quadro(295,315,130,100 ,'#010096');
  quadro(300,320,120,90 ,'#000');
  
};
var pac= function(x,y,b1,b2){
  bolabreta(x+35,y+75,15,"#f3ea07",b1,b2);
}
var a = 1;
b = 1;
e=100;
b1=0;
b2=0;
z=0;
q=Math.floor((Math.random() * 6) + 1);

var troca=function(){
switch(q){
  case 3:
    bnx=430;
    bny=380;
    break;
    case 4:
    bnx=0;
    bny=380;
    break;
    case 5:
    bnx=430;
    bny=0;
    break;
  default:
    bnx=0;
    bny=0;
};
}
troca();

function draw(context, a, b,el,ely,fada,e,bnx,bny,b1,b2) {
  
  cenario();  

  escreva("a "+a, 12, 12);

  escreva("b "+b, 68, 12);
  escreva("cx "+el, 152, 12);
  escreva("cy "+ely, 212, 12);
  escreva("time "+e, 299, 12);
  escreva(q, 390, 12);
  pac(bnx,bny,b1,b2);
  blinky(a,b,z);

  
  
  
    
}

function blink_des(
  canvas, context) {
  // pixels / second
  var el = document.getElementById('cordx').innerHTML;
  var ely = document.getElementById('cordy').innerHTML;
    b2=b2-0.03;
    if(b2<-0.65){
      b2=0;
    };
    b1=b1+0.03;
    if(b1>0.65){
      b1=0;
    };
     e =e+1/20;
    var f=parseInt(e+1/40);
var com="fada1";
    
    //el cx   ely cy
  if (el > 200 &&b<1||el > 200 &&b>375||el > 200&&b>185&&b<191&&a>219) {
    if (a > 420) {
      a=425;
    }
    a += 5;
    

  }
  if (el < 200 &&b<1||el < 200 &&b>375||el < 200&&b>185&&b<191&&a>220) {
    if (a < 10) {
      a = 5;
    }
    a -= 5;
  }
  if (ely > 200&&a<3||ely > 200&&a>429||ely > 200&&a>217&&a<224) {
    if (b > 375) {
      b=375;
    }
    b += 5;

  }
  if (ely < 200&&a<3||ely < 200&&a>429||ely < 200&&a>217&&a<224) {
    if (b < 10) {
      b = 5;
    }
    b -= 5;
  }
    if(a===bnx && b===bny){
         q=Math.floor((Math.random() * 6) + 1);
        troca();
    };

  context.clearRect(0, 0, canvas.width, canvas.height);
    
  draw(context, a, b,el,ely,com,f,bnx,bny,b1,b2);

  // request new frame
  requestAnimFrame(function() {
    blink_des(canvas, context);
  });
}

var canvas = document.getElementById('tela');

var context = canvas.getContext('2d');


blink_des(canvas, context);

function showCoords(event) {

  var x = event.clientX;
  var y = event.clientY;
  document.getElementById("cordx").innerHTML = x;
  document.getElementById("cordy").innerHTML = y;
}