document.querySelector("#startQuiz").addEventListener("click", pushedStartQuiz);  //
document.querySelector("#headInfoTime")

var startButton = document.querySelector("#startQuiz")

var timer = document.querySelector("#headInfoTime")
var secondsLeft = 76;

function pushedStartQuiz(){                 //Buttonclicked function, sets time
  setTime()
  hideStartButton()
};





function setTime() {                          //Function for timer
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval); 
      gameOver()   
    } 
  }, 1000);
}

function gameOver(){
    //hide qOptions and check divs , show input block
    //take score and initials and save in local storage
}


var index =0

function hideStartButton(){
startButton.style.display = "none"
showQuestions()
}

function showQuestions(){

    if (index<Questions.length){
    
        document.getElementById('qOptions').innerHTML=
        `
        <ol >   
        <p>${Questions[index].title}</p>   
                <button> ${Questions[index].answers[0]} </button>
                <button> ${Questions[index].answers[1] }</button>
                <button> ${Questions[index].answers[2] }</button>
                <button> ${Questions[index].answers[3] } </button>  
        </ol>
        `
} else {gameOver()}
}

document.getElementById('qOptions').onclick = function(e){

    if (e.target.innerText === Questions[0].correct){
        document.getElementById('check').innerHTML=`<h3>Correct</h3>`
    }else{
        document.getElementById('check').innerHTML=`<h3>Wrong</h3>`
        secondsLeft -=10
    }
    index++
showQuestions()
}














//Create Quiz Questions 






let Questions = [
{
    title: "Which is a component of the biological profile?",
    answers: ["age", "diet", "bone-density", "attrition"],
    correct: "age",
},

{
    title: "How many teeth does an adult have?",
    answers: ["age", "diet", "bone-density", "attrition"],
    correct: "age",
},


{}





] 







// let questions = [
//     new Question(
//         "Which is a component of the biological profile?", ["age", "diet",
//         "bone-density", "attrition"], "age"
//     ),

//     new Question(
//         "How many teeth does an adult have?", ["30", "28",
//         "32", "26"], "32"
//     ),

//     new Question(
//         "Who is considered the father of Anthropology?", ["Franz Boas", "Dimitri Sandoval",
//         "Joffrey Pietry", "Samuel Cane"], "Franz Boas"
//     ),

//     new Question(
//         "How many years ago did the Neanderthals die off", ["40,000", "100,000",
//         "150,000", "200,000"], "40,000"
//     ),

//     new Question(
//         "What skeletal remains can provide insight to whether the specimen is male or female?", ["Femoral Head", "C-7",
//         "Metacarpals", "Hyoid"], "Femoral Head"
//     ),

//     new Question(
//         "What is one method of finding a candlestine grave", ["Hydroflaxing", "Restall Layout",
//         "GeoTerrain", "Subsurface Probing"], "Subsurface Probing"
//     ),

//     new Question(
//         "In what part of the body is the Occipital bone found", ["Cranium", "Appendicular",
//         "Vertebral", "Torso"], "Cranium"
//     ),

//     new Question(
//         "About what age does the clavicle stop growing?", ["32", "25",
//         "18", "14"], "25"
//     ),

//     new Question(
//         "How many subfields of Anthropology are there?", ["One", "Two",
//         "Three", "Four"], "Four"
//     ),

//     new Question(
//         "Anthropology is the study of...?", ["Insects", "Bones",
//         "Humans", "History"], "Franz Boas"
//     ),






