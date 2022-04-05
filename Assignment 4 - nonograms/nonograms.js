"use strict";

(function() {
    let tile = document.getElementsByClassName("box");
    let clearBtn = document.getElementById("clearBtn");

    window.onload = function() {
        
        // 각 타일마다 이벤트리스너 추가.
        for (var i = 0; i<tile.length; i++) {
            tile[i].addEventListener("click", tileClicked);
            
        }
        clearBtn.addEventListener("click", clearBtnClicked);
        
    };
    
    // 타일이 클릭되었을때 실행되는 함수
    function tileClicked() {
        alert("You clicked a tile!");
        
        // 검정색으로 채워진 타일이면
        if (this.classList.contains('filled')) {
            // 검정색 타일을 x표시 타일로 바꿔줌
            this.classList.remove('filled');
            this.classList.add('crossed-out');
        // x표시인 타일이면
        } else if (this.classList.contains('crossed-out')) {
            // x표시를 지우고 검정색 타일로 바꿔줌
            this.classList.remove('crossed-out');
            this.classList.add('filled');
        // 만약 클릭되지 않은 타일이면
        } else {
            this.classList.add('filled');
        }

    }
    
    // 'clear' 버튼이 클릭되었을 때 실행되는 함수
    function clearBtnClicked() {
        var choice = confirm("Are you sure you want to delete?");
        
        if (choice) {
            tileClear();
        }
    }
    
    // 타일을 초기화 시켜주는 함수
    function tileClear() {
                
        for (var i = 0; i < tile.length; i++) {
            if (tile[i].classList.contains('filled')) {
                tile[i].classList.remove('filled');
            } else if (tile[i].classList.contains('crossed-out')) {
                tile[i].classList.remove('crossed-out');
            }
        }
    }
})();
