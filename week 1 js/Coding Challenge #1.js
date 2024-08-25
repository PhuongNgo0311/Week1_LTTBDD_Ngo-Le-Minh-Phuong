// // Mark and John are trying to compare their BMI (Body Mass Index), which is
// // calculated using the formula:
// // BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// // and height in meter).


// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// var heightMark = 1.69;
// var weightMark =78;
// var BMIMark = weightMarK /(heightMark **2);

//Data 1:-
let heightMark=1.69;
let weightMark=78;
let BMIMark=weightMark/(heightMark**2);

let heightJohn=1.95;
let weightJohn=92;
let BMIJohn=weightJohn/(heightJohn**2);

markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI);

//Data 2:-
heightMark=1.88;
weightMark=95;
BMIMark=weightMark/(heightMark**2);

heightJohn=1.76;
weightJohn=85;
BMIJohn=weightJohn/(heightJohn**2);

markHigherBMI=BMIMark>BMIJohn;
console.log(markHigherBMI);

