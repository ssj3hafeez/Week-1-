var input = [
    { x: 3, y: 4 }, //array 0
    { x: 12, y: 5 }, // array 1 
    { x: 8, y: 15 } // array 2 
  ];


  // pythagorean Theorem (x^2 + y^2 = z^2)
  var result = input.map(function( AB ) {
    return Math.sqrt(AB.x * AB.x + AB.y * AB.y);
   
  } 
     );
  
  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);