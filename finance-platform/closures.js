// function retirement(retirementAge) {
//     return function(yearOfBirth) {
//         var a = ' years left untill retirement.'
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1995)

// retirement(66)(1994)


function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('What do you do ' + name + '?');
        }
    }
}

var teacher = interviewQuestion('engineer')('Jack');