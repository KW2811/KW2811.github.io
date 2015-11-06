//gameplay here
$(document).ready(function() {

  $("#playBtn").click(function() {
    $("#playBtn").hide();
    $("#gameBody").css("background", "url('bg.png')");
    $("#krishnadiv").css("display", "inline-block");
    $("#Pigdiv").css("display", "inline-block");
    $("#mvkdiv").css("display", "inline-block");
  });

  $("#up").click(function() {
  	$("#krishnadiv").css("top", "100px");
  });

  $("#down").click(function() {
  	$("#krishnadiv").css("top", "500px");
  });

  $("#left").click(function() {
  	$("#krishnadiv").css("left", "10px");
  });

  $("#right").click(function() {
  	$("#krishnadiv").css("left", "500px");
  });

});