mybigimage = document.getElementById("largeview");
gobaby = document.getElementById("gobaby");

gobaby.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

function makeBigImage() {
    mybigimage.innerHTML = "";
    bigimage = document.createElement("img");
    bigimage.src = "gobabygobig.png";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
    gobaby.classList.add("dontshow");
}

function hideBigImage() {
    mybigimage.classList.add("dontshow");
    gobaby.classList.remove("dontshow");
}