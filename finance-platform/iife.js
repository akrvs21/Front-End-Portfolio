// Immidiately invoked function expression
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5)
// }

// game();

(function(luck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - luck)
})(5);