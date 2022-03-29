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
    
    let speedSelect = document.getElementById("speed");
    speedSelect.onchange = changeSelect;
};


function startBtnClicked() {
    var display = document.getElementById("displayReader");
    var textList = document.getElementById("inputText").value;
    var text = textList.split(/\s+/);
    var index = 0;
    
    document.getElementById("stop").disabled=false;
    document.getElementById("start").disabled=true;
    
    playSpeedReader = setInterval(function() {
        display.innerHTML = text[index++];
        
        if (index >= text.length) {
            clearInterval(playSpeedReader);
            document.getElementById("displayReader").innerHTML = "";
        }
    }, speed);
    
}

function stopBtnClicked() {
    clearInterval(playSpeedReader);
    document.getElementById("displayReader").innerHTML = "";
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
}

function changeSelect() {
    var speedSelect = document.getElementById("speed");
    speed = speedSelect.options[speedSelect.selectedIndex].value;
    document.getElementById("displayReader").innerHTML = speed;

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

