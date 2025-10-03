let panelbottom = document.querySelector('.panel-bottom')
let timebox = document.querySelector('.time .box')
let hitBox = document.querySelector('.hit .box')


function makebubble() {  
let bubble = ''
for (let i = 0; i<=132; i++){
    let randomBubble = Math.floor(Math.random()*10)
   bubble += `<div class="bubble">${randomBubble}</div>`
}

panelbottom.innerHTML = bubble
}

function timer (){
    let timer = 60;
setInterval(function(){
     if(timer>0){
     timer--
     timebox.innerHTML = timer
     }
     else{
        panelbottom.innerHTML = "<h1>Game Over !</h1>"
     }
    
},1000)
}

function randomhit (){
    let hitRandom = Math.floor(Math.random()*10)
    hitBox.innerHTML =  hitRandom;
}



randomhit()
timer()

makebubble()