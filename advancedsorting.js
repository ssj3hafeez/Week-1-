var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

  //sort by name// 
var sort = students.sort(function (a,b) {
    if (a.name === b.name) {
        return a.age - b.age;
    }
    // compare names 
    return a.name < b.name ? -1 : 1;
});

console.log(sort);