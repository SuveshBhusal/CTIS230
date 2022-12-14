// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1");

// make something happen when we click on them

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

document.addEventListener("keyup", hideBigImage);
// document.addEventListener("keyup", makeBigImage);

function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = "";
    // add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    bigimage.src = "2_of_clubs.png";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
}

function hideBigImage() {
    mybigimage.classList.add("dontshow");
}


staticimage = document.getElementById("staticview");
gifimage = document.getElementById("gifview");

staticimage.addEventListener("mouseover", showGIF);
gifimage.addEventListener("mouseout", hideGif);

function showGIF() {
    gifview.classList.remove("dontshow");
    staticview.classList.add("dontshow");
}

function hideGif() {
    gifview.classList.add("dontshow");
    staticview.classList.remove("dontshow");
}