$(document).ready(function(){
  
  var magic8Ball = {};
  magic8Ball.listofanswers = ["Hire me?", "Bet365 is one of the first bookmakers to offer esports betting", "In 2011 started to push mobile betting", "In 2008 they added Bingo to their network", "In 2005 decided to focus only on internet business", "In 2004 started to offer poker online", "Bet365 Adds Bingo in 2008", "Started as betting shop chain Provincial Racing", "Hire me?", "Coates family are the largest tax payer in UK, 2 years in a row", "Owns Stoke City", "Founded in 2000 with 12 staff, now at over 5000", "A USP is the range of in-game betting variety", "Hire me?", "Denise is the wealthiest woman in the UK", "Denise acheived a first degree in econometrics", "Hillside Technology has over 1,300 talented technology professionals", "For the company!", "Locations include Manchester, Malta, Stoke, New Jersey", "John Coates is joint CEO", "53 million customers in 20 languages", "James Nightingale, Principle Infrastructure Architect at bet365, stated that Kubernetes could be a game-changer", "Hire me?", "Recently open sourced Jingo, which is a fast JSON encoder library for golang.", "Recently implemented Varnish HTTP cache", ];
 
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
    var question = "Lets try";
    magic8Ball.getAnswer(question);
  };
  
  $("#questionButton").click( onClick );
});
