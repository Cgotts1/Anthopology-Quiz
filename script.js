document.querySelector("#startQuiz").addEventListener("click", pushedStartQuiz); 
document.querySelector("#headInfoTime");
document.querySelector("#timeScore")
document.querySelector('#gameOver');



const input = document.querySelector("input"),
h2 = document.querySelector('h2');

h2.innerHTML = localStorage.getItem("value")

input.addEventListener("keyup", display);


localStorage.setItem('keyName', input.value);

function display(){
  localStorage.setItem('value', input.value);
  h2.innerHTML = localStorage.getItem("value")
}









var startButton = document.querySelector("#startQuiz");
var score = localStorage.getItem("count");
var timeScore = document.querySelector("#timeScore");
var gameDone = document.querySelector('#gameOver');
var timer = document.querySelector("#headInfoTime");
var secondsLeft = 76;
var index = 0;                           // Question index

function pushedStartQuiz() {             //Buttonclicked function, sets time, and starts game
  setTime();
  hideStartButton();
}

function setTime() {                     //Function for timer
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    } 
  }, 1000);
}

function hideStartButton() {              //Function for hiding button and switches to questions
  startButton.style.display = "none";
  showQuestions();
}

function showQuestions() {                  //Function for how seeing the series of questions
  if (index < Questions.length) {
    document.getElementById("qOptions.b").innerHTML = `
      <ol >   
      <p>${Questions[index].title}</p>   
            <button class = "b"> ${Questions[index].answers[0]} </button>
            <button class = "b"> ${Questions[index].answers[1]} </button>
            <button class = "b"> ${Questions[index].answers[2]} </button>
            <button class = "b"> ${Questions[index].answers[3]} </button>  
        </ol>
        `;
  } else {
    gameOver();
  }
}

document.getElementById("qOptions").onclick = function (e) {    //Function for right and wrong
  if (e.target.innerText === Questions[0].correct) {
    document.getElementById("check").innerHTML = `<h3>Correct</h3>`;
  } else {
    document.getElementById("check").innerHTML = `<h3>Wrong</h3>`;
    secondsLeft -= 10;
  }

  if (e.target.innerText === Questions[2].correct) {
    document.getElementById("check").innerHTML = `<h3>Correct</h3>`;
  } else {
    document.getElementById("check").innerHTML = `<h3>Wrong</h3>`;
    secondsLeft -= 10;
  }

  if (e.target.innerText === Questions[0].correct) {
    document.getElementById("check").innerHTML = `<h3>Correct</h3>`;
  } else {
    document.getElementById("check").innerHTML = `<h3>Wrong</h3>`;
    secondsLeft -= 10;
  }


  index++;
  showQuestions();
};

function gameOver() {
  if (index > Questions.length || secondsLeft <= 0) {
    gameDone.style.display = "block";
    qOptions.style.display = "none";
    timeScore.textContent = "Time: " + secondsLeft;
  } 

  //hide qOptions and check divs , show input block
  //take score and initials and save in local storage
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