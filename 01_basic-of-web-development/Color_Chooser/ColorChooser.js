var x = document.getElementsByClassName("slider");
var output = document.getElementById("demo");
for (i = 0; i < x.length; i++) {
    //x[i].oninput = colorShow();
}

function colorShow(val) {
    var red = document.getElementById("red-choser").value;
    var green = document.getElementById("green-choser").value;
    var blue = document.getElementById("blue-choser").value;
    var hexColor = rgbToHex(parseInt(red), parseInt(green), parseInt(blue));

    document.getElementById("color-hex").innerHTML = hexColor;
    document.getElementById("color-show").style.backgroundColor = hexColor;
}
function returnHex(num) {
    // Hex can store 16 different values in 1 character
    if (num == null) return "00";
    num = num.length < 2 ? "0" + num : num
    return num.toString(16);
}
function rgbToHex(r, g, b) {
    var red = returnHex(r);
    var green = returnHex(g);
    var blue = returnHex(b);
    var hex = "#" + red + green + blue;
    return hex;
}

function showInformation(){
    document.getElementById("myInfor").style.height = "100%";
}

function closeInformation(){
    document.getElementById("myInfor").style.height = "0%";
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}