
let numSquares = 6;
var colors = generateRandoColors(numSquares);
var h1 = document.querySelector("h1");
let heading = document.querySelector(".heading")
let pickedColor = pickColor(); 
var squares = document.querySelectorAll(".square"); 
var colorDisplay =document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3 ;
    colors = generateRandoColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(let i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]; 
        }else{
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandoColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(let i=0; i<squares.length; i++){
    
            squares[i].style.backgroundColor = colors[i];
        
            squares[i].style.display = "block";
        
    }
})

resetButton.addEventListener("click", function(){
    colors = generateRandoColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
    }
    heading.style.background = "#232323";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
});

for(let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
         let clikedColor = this.style.backgroundColor;
         if(clikedColor === pickedColor){
             messageDisplay.textContent = "Correct";
             changeColors(clikedColor);
            //  h1.style.background = clikedColor;
             heading.style.background = clikedColor;
             resetButton.textContent = "Play again";
         }else{
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again"
         }
    })
}

function changeColors(color){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let rando = Math.floor(Math.random()*colors.length);
    return colors[rando];
}

function generateRandoColors(num){
    var arr = [];
    for(let i=0; i<num; i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}