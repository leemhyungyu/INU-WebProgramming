"use strict";

(function() {
    let tile = document.getElementsByClassName("box");

    window.onload = function() {
                
        for (var i = 0; i<tile.length; i++) {
            tile[i].addEventListener("click", tileClicked);
            
        }
        
        let clearBtn = document.getElementById("clearBtn");
        clearBtn.addEventListener("click", clearBtnClicked);
        
    };
    
    function tileClicked() {
        alert("You clicked a tile!");
        
        if (this.classList.contains('filled')) {
            this.classList.remove('filled');
            this.classList.add('crossed-out');
        } else if (this.classList.contains('crossed-out')) {
            this.classList.remove('crossed-out');
            this.classList.add('filled');
        } else {
            this.classList.add('filled');
        }

    }
    
    function clearBtnClicked() {
        var choice = confirm("Are you sure you want to delete?");
        
        if (choice) {
            tileClear();
        }
    }
    
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
