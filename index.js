var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat';
  console.log('myAnimal');
console.log('yourAnimal');
  return animal
}
const two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  var theFunk = "funkyFunction";
  return function('i think this is ${theFunk} is a funky') {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

