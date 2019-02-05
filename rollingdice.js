var arg = process.argv[2];
var rolls = [];
function rollDice(num){
  for(var i = 0; i < num; i++){
    var rollValue = Math.floor(Math.random()*6)+1;
    rolls.push(rollValue);
    }
  console.log("Rolled " + num + " dice: " + rolls);
}
rollDice(arg);

