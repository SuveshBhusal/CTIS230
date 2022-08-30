myitem = document.getElementById("firsttest");
// this line makes myitem equal to the id firsttest
myitem.addEventListener("click", onClick);
//this uses an event listener to know when the text labelled by my item is clicked//
function onClick() {
    myitem.style.color = "green";
    myitem.style.fontSize = "2.0em";
}
//this line changes the color to green  and font size to 2em when the text labelled myitem is clciked

myitem.addEventListener("mouseoff", mouseout);

function mouseout() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}