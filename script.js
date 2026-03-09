function openFolder(id){

let el = document.getElementById(id)

if(el.style.display === "block"){

el.style.display = "none"

}

else{

el.style.display = "block"

}

}


function showText(text){

document.getElementById("popupText").innerText = text

document.getElementById("popup").classList.remove("hidden")

}


function closePopup(){

document.getElementById("popup").classList.add("hidden")

}


function birthdayReveal(){

document.getElementById("popupText").innerText =
"Happy Birthday Oogie ❤️\n\nYou followed all the folders...\n\nBut the best path I ever found was the one that led me to you.\n\nLove,\nDosa"

document.getElementById("popup").classList.remove("hidden")


confetti({
particleCount:150,
spread:80,
origin:{y:0.6}
})

}



/* ------------------------------
   Things I Like About My Oogie
--------------------------------*/

const reasons = [
"You make normal days feel special.",
"You look extra cute in your glasses.",
"You call me Dosa.",
"You make conversations feel easy.",
"You somehow make everything feel calmer.",
"You make small moments memorable.",
"You have a very kind heart.",
"You always surprise me.",
"You make life a little more fun.",
"You are my favourite person to talk to.",
"You make even boring moments interesting.",
"You always make me smile somehow.",
"You make things feel lighter.",
"You are my Oogie poo ❤️"
];

function showReason(){

const random = reasons[Math.floor(Math.random() * reasons.length)]

showText(random)

}
