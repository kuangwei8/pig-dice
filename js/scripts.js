
$(document).ready(function(){

//PLAYER----

function Player (score) {
    this.score = score
  }

Player.prototype.addScore = function (inputScore){
    this.score += inputScore;
  }


  $("#roll").click(function(){
    inputScore = (Math.floor(Math.random()*6) +1);
    

    console.log(inputScore);




   });
  });
