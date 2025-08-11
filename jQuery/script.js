
  $("h1").addClass("big-title margin-10");

  $("button").css("color", "blue");

  $("h1").text("Goodbye");

  $("button").html("<em>Clicked!</em>")

  $("h1").click(function(){
    $(this).css("color", "red");
  });

  $("button").click(function(){
    $("h1").css("color", "green");
  });

  $("input").keypress(function(event){
   $("h1").text(event.key);
  });

  