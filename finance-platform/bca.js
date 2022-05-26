// Lecture: Bind, call and apply

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
      if(style === 'formal') {
          console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m ' + this.age + ' years old.');
      } else if(style === 'friendly') {
          console.log('Hey! What\'s up? I\'m ' + this.name + ', O\'m ' + this.age + ' years old. Have a nice ' + timeOfDay)
      }
  }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// john.presentation('formal', 'morning');

// the first argument of call method is setting "this". 
// method borrowing
// john.presentation.call(emily,'friendly', 'afternoon');

// apply is simillar to call method. The difference is it takes an array as a second argument.
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind is simmilar to call function, so it sets this explicitly. but the difference is it doesn't immidiately call the function but instead it generates copy of the function so we can store it somewhere. 

var johnFriendly = john.presentation.bind(john, 'friendly') 
johnFriendly('morning')
johnFriendly('night')

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening')