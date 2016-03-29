$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var phrase = $("#phrase").val();
    var originalString = phrase;
    var puzzle = phrase.split("");
    $("#wordPuzzle").text("");

    for (var i=0; i < puzzle.length; i +=1) {
    if (puzzle[i].toUpperCase() === ("A") || puzzle[i].toUpperCase() === ("E") || puzzle[i].toUpperCase() === ("I") || puzzle[i].toUpperCase() === ("O") || puzzle[i].toUpperCase() === ("U") || puzzle[i].toUpperCase() === ("Y")) {
    puzzle[i] = ("-");
    }
    $("#wordPuzzle").append(puzzle[i]);
    }
    $("#inputForm").hide();

    if ($("#puzzle").val().toUpperCase() === originalString.toUpperCase()) {
      alert("you win!");
    }
  });
});
