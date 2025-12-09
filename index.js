var Escore = Number(prompt("Enter your English score:"));
console.log(Escore);

var Tscore = Number(prompt("Enter your Tamil score:"));
console.log(Tscore);

var Cscore = Number(prompt("Enter your Computer score:"));
console.log(Cscore);

var Pscore = Number(prompt("Enter your Physics score:"));
console.log(Pscore);

var Bscore = Number(prompt("Enter your Biology score:"));
console.log(Bscore);

var total = Escore + Tscore + Cscore + Pscore + Bscore;
var percent = total / 5;

var grade;

if (percent >= 90) {
    grade = "A";
} else if (percent >= 80) {
    grade = "B";
} else if (percent >= 70) {
    grade = "C";
} else if (percent >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Total Marks: " + total);
console.log("Percentage: " + percent);
console.log("Grade: " + grade);
