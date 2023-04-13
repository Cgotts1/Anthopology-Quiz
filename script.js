document.querySelector("#startQuiz").addEventListener("click", pushedStartQuiz); // Query selectors for different components of the html page
document.querySelector("#headInfoTime");
document.querySelector("#timeScore")
document.querySelector('#gameOver');
document.querySelector('#headInfoHighscores');
var userScore = document.querySelector('#secondLeft');
var text = document.querySelector("input")

// Local storage code
const input = document.querySelector(".formSubmit"),

h2 = document.querySelector('h2');
// h2.innerHTML = localStorage.getItem("value");      // Commenting this out fixed the issue with the local storage of objects displaying right when the game over screen pops up
input.addEventListener("click", display);


function display(){
  h2.innerHTML = "";
  var players = localStorage.getItem("value");
  if(!players) {
    players = "[]";
  }
  console.log(players)
  players = JSON.parse(players)
  console.log(players);

  // for(var i = 0; i<players.length; i++) {
  //   var object = players[i];
  //   console.log(object);
  //   console.log(i);
  //   h2.innerHTML += object.name + " " + "<span class = 'secondsLeft'> " + object.score + " </span><br/>";
  // }

     h2.innerHTML = "Your score has been added!";


  var a = (text.value)
  var b = (secondsLeft)
  var player = {
    name: a,
    score: b,
  }
  
  //var players = []
  players.push(player)
  console.log(players)
  
  localStorage.setItem('value', JSON.stringify(players) );
}

// Variables for the start button, timer, gameover screen
var startButton = document.querySelector("#startQuiz");
var score = localStorage.getItem("count");
var hiScorePage = document.querySelector('#headInfoHighscores');
var timeScore = document.querySelector("#timeScore");
var gameDone = document.querySelector('#gameOver');
var timer = document.querySelector("#headInfoTime");
var secondsLeft = 76;
var index = 0;                           // Question # index

function pushedStartQuiz() {             //Buttonclicked function, sets time, and starts game
  setTime();
  hideStartButton();
}

function setTime() {                     //Function for timer
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || secondsLeft <=0 || index === 10) {     // Added index ===10 (length of questions to stop timer)
      gameOver()                            // Ends the game 
      clearInterval(timerInterval);
      
    } 
  }, 1000);
}

function hideStartButton() {                // Function for hiding button and switches to questions
  startButton.style.display = "none";
  showQuestions();
}

function showQuestions() {                  //Function for how seeing the series of questions
  if (index < Questions.length) {
    document.getElementById("qOptions").innerHTML = `
      <ol >   
      <p>${Questions[index].title}</p>   
            <button>${Questions[index].answers[0]}</button>
            <button>${Questions[index].answers[1]}</button>
            <button>${Questions[index].answers[2]}</button>
            <button>${Questions[index].answers[3]}</button>  
        </ol>
        `;
  } else {
    gameOver(); 
  }
}

document.getElementById("qOptions").onclick = function (e) {    //Function for right and wrong
  if (e.target.innerText === Questions[index].correct) {
    document.getElementById("check").innerHTML = `<h3>Correct</h3>`;
  } else {
    document.getElementById("check").innerHTML = `<h3>Wrong</h3>`;
    secondsLeft -= 10;
  }

  index++;
  showQuestions();
};

function gameOver() {                                      // Game over function
  if (secondsLeft <= 0 || index > 0) {                     // Index > 0 to end game once questions are done
    gameDone.style.display = "block";
    qOptions.style.display = "none";
    timeScore.innerHTML = "Your final score is: " + "<span id = 'secondsLeft' > " + secondsLeft + " </span>";
    clearInterval;
  } 
}

// Quiz questions
let Questions = [
  {
    title: "Which is a component of the biological profile?",
    answers: ["age", "diet", "bone-density", "attrition"],
    correct: "age",
  },

  {
    title: "How many teeth does an adult have?",
    answers: ["30", "28", "32", "26"],
    correct: "32",
  },

  {
    title: "Who is considered the father of Anthropology?",
    answers: [
      "Franz Boas",
      "Dimitri Sandoval",
      "Joffrey Pietry",
      "Samuel Cane",
    ],
    correct: "Franz Boas",
  },

  {
    title: "How many years ago did the Neanderthals die off?",
    answers: ["40,000", "100,000", "150,000", "200,000"],
    correct: "40,000",
  },

  {
    title:
      "What skeletal remains can provide insight to whether the specimen is male or female?",
    answers: ["Femoral Head", "C-7", "Metacarpals", "Hyoid"],
    correct: "Femoral Head",
  },

  {
    title: "What is one method of finding a candlestine grave?",
    answers: [
      "Hydroflaxing",
      "Restall Layout",
      "GeoTerrain",
      "Subsurface Probing",
    ],
    correct: "Subsurface Probing",
  },

  {
    title: "In what part of the body is the Occipital bone found?",
    answers: ["Cranium", "Appendicular", "Vertebral", "Torso"],
    correct: "Cranium",
  },

  {
    title: "About what age does the clavicle stop growing?",
    answers: ["32", "25", "18", "14"],
    correct: "25",
  },

  {
    title: "How many subfields of Anthropology are there?",
    answers: ["One", "Two", "Three", "Four"],
    correct: "Four",
  },

  {
    title: "Anthropology is the study of what?",
    answers: ["Insects", "Disease", "Humans", "History"],
    correct: "Humans",
  },
];