let panelbottom = document.querySelector('.panel-bottom')

let bubble = ''
for (let i = 0; i<=132; i++){
    let randomBubble = Math.floor(Math.random()*10)
   bubble += `<div class="bubble">${randomBubble}</div>`
}

panelbottom.innerHTML = bubble