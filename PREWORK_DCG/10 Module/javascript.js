

function growBig() {
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
}

function turnBlue() {
    document.getElementById("box").style.backgroundColor = "blue";
}

function getLight() {
    document.getElementById("box").style.opacity = "0.25";
}

function goBack() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

}