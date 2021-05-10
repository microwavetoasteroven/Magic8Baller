$(document).ready(function(){
  
  var magic8Ball = {};
  magic8Ball.listofanswers = ["Ms Coates: largest tax payer in UK", "Owns Stoke City", "Founded 2020 with 12 staff", "In-game betting variety", "Wealthiest woman in the UK", "First degree in econometrics", "over 1,300 talented technology professionals", "For the company!", "Manchester, Malta, Stoke, New Jersey", "Signs point to yes.", "53 million customers in 20 languages"];
 
  magic8Ball.getAnswer = function(question)
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
    $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    console.log(question);
    console.log(answer);
  };
  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    var question = prompt("What do you want to know?");
    magic8Ball.getAnswer(question);
  };
  
  $("#questionButton").click( onClick );
});
