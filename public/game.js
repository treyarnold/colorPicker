var cards = document.querySelectorAll(".square");
var correctHeader = document.querySelectorall(".rgb");
var tryAgain = document.querySelector("#tryAgain");
var newColors = document.querySelector("#newColors");
var header = document.querySelector(".header");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var options = 6;
var row2 = document.querySelector("#row2");
var correct = getRandomInt(options);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomRGB (selector) {
    var red = getRandomInt (256);
    var green = getRandomInt (256);
    var blue = getRandomInt (256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")"
    selector.style.backgroundColor = color;
}

function reset () {
    for (var i = 0; i < cards.length; i++){
        randomRGB(cards[i]);    
        cards[i].classList.remove("invisible");
    }    
    correct = getRandomInt(options);
    correctHeader.textContent = cards[correct].style.backgroundColor;
    tryAgain.textContent = "Try Again";
    tryAgain.classList.add("invisible");
    newColors.textContent = "NEW COLORS"
    header.style.backgroundColor = "rgb(73, 117, 188)";
}


function squareListener(){
    for (var i = 0; i < cards.length; i++){
        cards[i].addEventListener("click",function(){
            tryAgain.classList.remove("invisible");
            if (this.style.backgroundColor != cards[correct].style.backgroundColor){
                this.style.backgroundColor = "black";
            }
            else {
                newColors.textContent = "PLAY AGAIN?"
                tryAgain.textContent = "Correct!"
                for (i = 0; i < cards.length; i++){                    
                    cards[i].style.backgroundColor = cards[correct].style.backgroundColor;
                }
                header.style.backgroundColor = cards[correct].style.backgroundColor;
            }
        })
    }
}

reset();
squareListener();

newColors.addEventListener("click", function(){
    reset();
})

newColors.addEventListener("mouseover", function(){
    newColors.classList.add("selected");
    newColors.classList.add("text-white");
})

newColors.addEventListener("mouseout", function(){
    newColors.classList.remove("selected");
    newColors.classList.remove("text-white");            
})

easy.addEventListener("mouseover", function(){
    easy.classList.add("selected");
    easy.classList.add("text-white");
})

easy.addEventListener("mouseout", function(){
    if (options == 6){
        easy.classList.remove("selected");
        easy.classList.remove("text-white");        
    }
})

hard.addEventListener("mouseover", function(){
    hard.classList.add("selected");
    hard.classList.add("text-white");
})

hard.addEventListener("mouseout", function(){
    if (options == 3){
        hard.classList.remove("selected");
        hard.classList.remove("text-white");        
    }
})

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    easy.classList.add("text-white");
    hard.classList.remove("selected");
    hard.classList.remove("text-white");
    options = 3;
    row2.classList.add("d-none");
    reset();
})

hard.addEventListener("click", function(){
    hard.classList.add("selected");
    hard.classList.add("text-white");
    easy.classList.remove("selected");
    easy.classList.remove("text-white");
    options = 6;
    row2.classList.remove("d-none");
    reset();
})

