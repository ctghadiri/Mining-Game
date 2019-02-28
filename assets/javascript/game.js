var wins = 0
var losses = 0


var targetNumber = Math.floor(Math.random()*102 + 19);

$("#number-to-guess").text(targetNumber);

var counter = 0;

var image1 = $("#1");
    image1.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
var image2 = $("#2");
    image2.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
var image3 = $("#3");
    image3.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
var image4 = $("#4");
    image4.attr("data-mineValue", Math.floor(Math.random()*12 + 1))

$(".pick-image").on("click", function() {

    var pickValue = ($(this).attr("data-mineValue"));

    pickValue = parseInt(pickValue);

    counter += pickValue;


    if (counter === targetNumber) {
        alert("You win!");
        targetNumber = Math.floor(Math.random()*102 + 19);
        wins++;
        counter = 0;
        $("#number-to-guess").text(targetNumber);
        image1.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
        image2.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
        image3.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
        image4.attr("data-mineValue", Math.floor(Math.random()*12 + 1))

    }

    else if (counter > targetNumber) {
        alert("You lose!!");
        targetNumber = Math.floor(Math.random()*102 + 19);
        losses++;
        counter = 0;
        $("#number-to-guess").text(targetNumber);
        image1.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
        image2.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
        image3.attr("data-mineValue", Math.floor(Math.random()*12 + 1))
        image4.attr("data-mineValue", Math.floor(Math.random()*12 + 1))

    }
    $("#wins-text").text("Wins: " + wins);
    $("#losses-text").text("Losses: " + losses);
    $("#counter").text("Counter: " + counter)
});