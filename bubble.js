var score=0;
var timer=30;
var hitrn=0;

function bubblemake(){
    var clut="";

for(var i=1; i<=51; i++){

    var ran= Math.floor(Math.random()*10);
    clut +=`<div class="bubble">${ran}</div>`;
}

document.querySelector('#low_bar').innerHTML=clut;
}



function runtime(){
    var ti=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#tim").innerHTML=timer;
        }
        else{
            clearInterval(ti);
            document.querySelector("#low_bar").innerHTML= `<h1>GAME OVER<h1>`;
        }
    },1000);
}

function gethit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=hitrn;
}

function scoreup(){
    score+=10;
    document.querySelector("#sup").textContent=score;
}

document.querySelector("#low_bar").addEventListener("click",function(dets){
    var clicked=Number(dets.target.textContent);
    if(clicked===hitrn){
        scoreup();
        bubblemake();
        gethit();
    }
    

});

scoreup();

gethit();

runtime();

bubblemake();
