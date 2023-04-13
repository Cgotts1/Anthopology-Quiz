const highScorePage = document.querySelector(".high-score-page");
highScorePage.innerHTML = "<h2>Hello</h2>";
// highScorePage.textContent = "yo moma"
h2 = document.querySelector('h2');
var text = document.querySelector("input")



function display(){
    h2.innerHTML = "";
    var players = localStorage.getItem("value");
    if(!players) {
      players = "[]";
    }
    console.log(players)
    players = JSON.parse(players)
    console.log(players);
  
    for(var i = 0; i<players.length; i++) {
      var object = players[i];
      console.log(object);
      console.log(i);
      h2.innerHTML += object.name + " " + "<span class = 'secondsLeft'> " + object.score + " </span><br/>";
    }
  
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

  display()