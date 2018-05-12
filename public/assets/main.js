// Array of colors
var colors = ['red', 'green', 'blue'];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(colors);

///////////////////////////////////////////////////////

var score = 0;

function startGame(){


    // Replaces game elements with random values from the array 
    document.getElementById('option-one').innerHTML = colors[0].toUpperCase();
    document.getElementById('option-two').innerHTML = colors[1].toUpperCase();
    document.getElementById('option-three').innerHTML = colors[2].toUpperCase();
    document.getElementById('option-one').style.backgroundColor = colors[1];
    document.getElementById('option-two').style.backgroundColor = colors[2];
    document.getElementById('option-three').style.backgroundColor = colors[0];


    
}

function changeScene(){

    shuffle(colors);

    // Changes game scence
    document.getElementById('option-one').innerHTML = colors[0].toUpperCase();
    document.getElementById('option-two').innerHTML = colors[1].toUpperCase();
    document.getElementById('option-three').innerHTML = colors[2].toUpperCase();

    document.getElementById('option-one').style.backgroundColor = colors[1];
    document.getElementById('option-two').style.backgroundColor = colors[2];
    document.getElementById('option-three').style.backgroundColor = colors[0];

    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById('box').innerHTML = randomColor.toUpperCase();
    document.getElementById('box').style.backgroundColor = randomColor;
}

// Checks if option picked is correct 
// If correct, increment score else alert 'Game Over'
function check(val){
    // Starts timer when score == 1, countdown from 60 to 0 seconds
    setTimeout(function(){ alert("Game Over"); location.reload() }, 60000);
    var answer = document.getElementById(val).innerHTML.toLowerCase();
    var match = document.getElementById('box').style.backgroundColor;
    if(answer === match){
        score++;
        document.getElementById('score').innerHTML = score;
        changeScene();   
    } else{
        document.getElementById('score').innerHTML = 0;
        alert('GAME OVER');
    }
}