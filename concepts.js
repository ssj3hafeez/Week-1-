/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

  var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
  var concepts = joinList(conceptList);


  function joinList(conceptList) {

    var str = "";
    for (var i = 0; i < conceptList.length; i++) {
      str += conceptList[i] + ", ";
    }
    return str.substr(0, str.length - 2);

  }

// Write your code here...

  console.log("Today I learned about " + concepts + ".");