"use strict";

var speed = 171;
var text;
var index = 0;
var playSpeedReader;

(function() {
    window.onload = function() {

            let startBtn = document.getElementById("start");
            startBtn.addEventListener("click", startBtnClicked);

            let stopBtn = document.getElementById("stop");
            stopBtn.addEventListener("click", stopBtnClicked);

            let middleLableBtn= document.getElementById("middle");
            middleLableBtn.addEventListener("click", changeMiddleSize);

            let bigLableBtn= document.getElementById("big");
            bigLableBtn.addEventListener("click", changeBigSize);

            let biggerLableBtn= document.getElementById("bigger");
            biggerLableBtn.addEventListener("click", changeBiggerSize);

            let speedSelect = document.getElementById("speed");
            speedSelect.addEventListener("change", changeSelect);
    };
        
    function startBtnClicked() {
            var display = document.getElementById("displayReader");
            var textList = document.getElementById("inputText").value;
            text = textList.split(/\s+/);

            document.getElementById("stop").disabled = false;
            document.getElementById("start").disabled = true;
            
            playSpeedReader = setInterval(displaySpeedReader, speed);
            
            index = 0;
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
            
            clearInterval(playSpeedReader);
            playSpeedReader = setInterval(displaySpeedReader, speed);

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
    
    function displaySpeedReader() {
        if (text.length <= index) {
            stopBtnClicked();
        } else {
            document.getElementById("displayReader").innerHTML = text[index++];

        }
    }
})();
