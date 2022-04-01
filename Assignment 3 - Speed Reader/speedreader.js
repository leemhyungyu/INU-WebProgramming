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
        
    // start버튼을 눌렀을 떄 실행되는 함수
    function startBtnClicked() {
            var display = document.getElementById("displayReader");
            var textList = document.getElementById("inputText").value;
            text = textList.split(/\s+/);
            
            // 시작버튼은 비활성화, 스탑버튼은 활성화
            document.getElementById("stop").disabled = false;
            document.getElementById("start").disabled = true;
            
            // displaySpeedReader함수를 speed딜레이로 실행시킴
            playSpeedReader = setInterval(displaySpeedReader, speed);
        
            index = 0;
    }
    
    // stop버튼을 눌렀을 떄 실행되는 함수
    function stopBtnClicked() {
            // displaySpeedReader함수를 중단시킴
            clearInterval(playSpeedReader);
            
            // 화면에 아무것도 표시안되게 설정
            document.getElementById("displayReader").innerHTML = "";
        
            // 시작버튼은 활성화, 스탑버튼은 비활성화
            document.getElementById("stop").disabled = true;
            document.getElementById("start").disabled = false;
    }
    
    // speed select의 값이 바꼈을 때 실행되는 함수
    function changeSelect() {
            // 선택된 값을 가져옴
            var speedSelect = document.getElementById("speed");
            speed = speedSelect.options[speedSelect.selectedIndex].value;
            
            // displaySpeedReader함수를 중단시키고, 선택된 speed값으로 다시 실행시킴
            clearInterval(playSpeedReader);
            playSpeedReader = setInterval(displaySpeedReader, speed);
    }
        
    // medium버튼이 클릭됐을 떄 실행되는 함수
    function changeMiddleSize() {
            document.getElementById("displayReader").style.fontSize = "36pt";
    }
    
    //  big버튼이 클릭됐을때 실행되는 함수
    function changeBigSize() {
            document.getElementById("displayReader").style.fontSize = "48pt";
    }
    // bigger버튼이 클릭됐을떄 실행되는 함수
    function changeBiggerSize() {
            document.getElementById("displayReader").style.fontSize = "60pt";
    }
    
    // 화면에 사용자가 입력한 text를 출력하는 함수
    function displaySpeedReader() {
        if (text.length <= index) {
            stopBtnClicked();
        } else {
            // 쉼표, 마침표, 느낌표, 물음표, 세미콜론이 마지막에 오면 제거해줌.
            var result = text[index++];
            result = result.replace(/[,.!?;]$/, '');
            document.getElementById("displayReader").innerHTML = result;
        }
    }
})();
