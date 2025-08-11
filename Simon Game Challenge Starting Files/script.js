var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColor = buttonColors[Math.floor(Math.random() * 4)];
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    nextSequence();
    $("h1").text("Level " + level);
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

//function for the sequence of the game
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    startOver();
    console.log("wrong");
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

//function for playing what sounds will be played depending on the color
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
