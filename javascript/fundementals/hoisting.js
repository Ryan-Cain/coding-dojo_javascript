// Rewrite the given code as it is seen by the interpreter
// Predict the outputs

// 1
console.log(hello);
var hello = "world";

// read by interpeter as
var hello;
console.log(hello);
var hello = "world";
// logs undefined

// 2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

// read by interpeter as
var needle = "haystack";
function test() {
  var needle = "magnet";
  console.log(needle);
}
test();
// logs magnet

// 3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// read by interpeter as
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan); // function is not run, nothing logs here
}
console.log(brendan);
// logs super cool

// 4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

// read by interpeter as
var food = "chicken";
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
}
console.log(food);
eat();
// logs chicken, half-chicken

// 5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

// read by interpeter as
mean();
console.log(food);
var mean = function () {
  var food;
  food = "chicken";
  console.log(food);
  food = "fish";
  console.log(food);
};
console.log(food);
// errors because the mean function is called before it is declared, function expressions are not hoisted

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// read by interpeter as
var genre;
function rewind() {
  var genre;
  genre = "rock";
  console.log(genre);
  genre = "r&b";
  console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// logs undefined, rock, r&b, disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// read by interpeter as
var dojo; // if no declarator is given then a var is automatically added
function learn() {
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// logs san jose, seattle, burbank, san jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

// read by interpeter as;
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
// logs {name: "Chicago, students: 65, hiring: true"}
console.log(makeDojo("Berkeley", 0));
// errors because you can not change the type of dojo from object to a string
