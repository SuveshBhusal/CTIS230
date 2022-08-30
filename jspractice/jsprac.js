ourText = document.getElementById("newtext");
ourText.addEventListener("mouseover", onMouseOver);

function onMouseOver() {
    ourText.style.color = "red";
    ourText.style.fontSize = "3em";
    ourText.innerHTML = "brand new whip just hopped in";
}

ourText.addEventListener("mouseout", onmouseout);

function onmouseout() {
    ourText.style.color = "black";
    ourText.style.fontSize = "1em";
    ourText.innerHTML = "<strong>whats poppin<strong>";
}

ourInput = document.getElementById("myinput");
ourHeading = document.getElementById("header");

ourInput.addEventListener("change", changeText);
ourInput.addEventListener("blur", changeText);

function changeText() {
    newtext = ourInput.value;
    ourHeading.innerHTML = newText;
}
myCard = document.getElementById("card");
myCardImage = document.getElementById("cardimage");
myCard.addEventListener("click", changeImage);

function changeImage() {
    // myCardImage.style.src = "rubikscube.jpg";
    myCard.style.position = "absolute";
    myCard.style.top = "100px";
    myCard.style.left = "100px";
    myCardImage.style.width = "80px";
}