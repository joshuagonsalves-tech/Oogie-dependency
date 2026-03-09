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
