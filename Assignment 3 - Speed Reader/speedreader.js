var speed = 400;

window.onload = function () {

    let startBtn = document.getElementById("start");
    startBtn.addEventListener("click", startBtnClicked);

    let stopBtn = document.getElementById("stop");
    stopBtn.onclick = stopBtnClicked;

    let middleLableBtn= document.getElementById("middle");
    middleLableBtn.onclick = changeMiddleSize;

    let bigLableBtn= document.getElementById("big");
    bigLableBtn.onclick = changeBigSize;

    let biggerLableBtn= document.getElementById("bigger");
    biggerLableBtn.onclick = changeBiggerSize;

};


function startBtnClicked() {
    var display = document.getElementById("displayReader");
    var textList = document.getElementById("inputText").value;
    var text = textList.split(/\s+/);
    var index = 0;

    if (text.length > 0) {
        timer = setInterval(function() {
        let select = document.getElementById("speed");
        select.onchange = changeSelect;
        display.innerHTML = text[index++];
        index = index % text.length;
    }, speed);
  }
}

function stopBtnClicked() {
    document.getElementById("displayReader").innerHTML = "";
}

function changeSelect() {
    var speedSelect = document.getElementById("speed");
    speed = speedSelect.options[speedSelect.selectedIndex].value;
}

function changeMiddleSize() {
    document.getElementById("displayReader").style.fontSize = "36pt";
}

function changeBigSize() {
    document.getElementById("displayReader").style.fontSize = "48pt";
}

function changeBiggerSize() {
    document.getElementById("displayReader").style.fontSize = "60pt";
}

