const Escore=prompt("Enter your English score:");
console.log (Escore)
const Tscore=prompt("Enter your Tamil score:");
console.log (Tscore)
const Cscore=prompt("Enter your Computer score:");
console.log (Cscore)
const Pscore=prompt("Enter your Physics score:");
console.log (Pscore)
const Bscore=prompt("Enter your Biology score:");
console.log (Bscore)

let total=Escore+Tscore+Cscore+Pscore+Pscore
let avg=total/5

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