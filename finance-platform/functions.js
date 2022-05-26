// A function is an instance of the Object typeof;
// A function behaves like any other object;
// We can store functions in a variable
// We can pass a function as an argument to another function.
// We can return a funciton from a function.

// Passing funciton as argument:
var years = [1995, 1965, 1937, 2005, 1998];

function arrayCalc(array, fn) {
  var arrRes = [];
  for (let i = 0; i < array.length; i++) {
    arrRes.push(fn(array[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2021 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) return Math.round
  (206.9 - 0.67 * el);
  else return -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(rates);

// Function returning functions
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQst = interviewQuestion("teacher");
teacherQst('Jack')

var designerQst = interviewQuestion("designer");
teacherQst('Lily')

var teacherQst = interviewQuestion("businesman");
teacherQst('John')
