myitem = document.getElementById("firsttest");
// this line makes myitem equal to the id firsttest
myitem.addEventListener("click", onClick);
//this uses an event listener to know when the text labelled by my item is clicked//
function onClick() {
    myitem.style.color = "green";
    myitem.style.fontSize = "2.0em";
}
//this line changes the color to green  and font size to 2em when the text labelled myitem is clciked

myitem.addEventListener("mouseout", onmouseout);

function onmouseout() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {
    otheritem.style.color = "red";
    otheritem.style.textDecoration = "underline";
}

thebutton2 = document.getElementById("thebutton2");
otheritem2 = document.getElementById("buttontest2");

thebutton2.addEventListener("click", onButtonClick1);

function onButtonClick1() {
    otheritem2.style.color = "green";
    otheritem2.style.fontSize = "1.3em";
}

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);

function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

translatebutton = document.getElementById("translatebutton");
translatecontent = document.getElementById("translatecontent");

translatebutton.addEventListener("click", onButtonClick2);

function onButtonClick2() {
    translatecontent.innerHTML = "म नेपाली राम्रोसीता बोल्छ";
}