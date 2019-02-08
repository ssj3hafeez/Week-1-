var words = ["ground", "control", "to", "major", "tom"];
/* return 

[6, 7, 2, 5, 3]
[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] 
*/

/* create a new array for 
each element of the list, run a function,
and take the value of that function, and 
put it in a new array and then 
return the new arraty after the loop is done. 

 */
function map (list, ab) {
    var input = [];
    for (var words = 0; words < list.length; words++) {
        var rad = ab(list[words], words, list);
        input.push(rad);
    } return input;
} 

console.log(
map(words, function(word) {
    return word.length;
}) );

console.log(
map(words, function(word) {
  return word.toUpperCase();
}));

console.log(
map(words, function(word) {
  return word.split('').reverse().join('');
}));

