function countLetters(strings) {
    strings = strings.replace(/\s/g, '') //replace the spaces // 
    var counted = {}; //Empty object awaiting input
    for(var i = [0]; i < strings.length; i++) { //Loop begins at letter 1 and loops until end of word
        var addition = strings[i];  //create a variable addtion to spit out string output //
        if(counted[addition]) {  
            counted[addition] = counted[addition] + 1
        } else {
            counted[addition] = 1;
        }
      }
      return counted;
    }
  console.log(countLetters("Lighthouse house house"));
