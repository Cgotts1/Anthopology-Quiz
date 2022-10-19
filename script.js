document.querySelector("#startQuiz").addEventListener("click", pushedStartQuiz);
document.querySelector("#headInfoTime")

var timer = document.querySelector("#headInfoTime")
var secondsLeft = 76;

function pushedStartQuiz(){                 //Buttonclicked function
  setTime()
};

function setTime() {                          //Function for timer
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);    
    } 
  }, 1000);
}