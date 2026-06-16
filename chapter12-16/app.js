CHAPTER NO 12-13

// Question 01

let ch = prompt("Enter a Character or Number")
let ascii = ch.charCodeAt(0)

if (ascii >= 48 && ascii <=57) {
    alert(`${ascii} is number`)
} else if (ascii >= 65 && ascii <=90){
    alert(`${ascii} is Uppercase Character`)
} else if (ascii >= 97 && ascii <=122){
    alert(`${ascii} is Lowercase Character`)
}else {
  console.log("Special Character");
}

// Question 02
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
if (a > b) {
  alert(`${a} is greater than ${b}`);
} else if (a < b) {
  alert(`${a} is less than ${b}`);
} else if (a == b) {
  alert(`${a} is equal ${b}`);
} else {
  alert("Special character");
}

// Question 03
let num = +prompt("Enter Number");
if (num > 0) {
  alert("Positive Number");
} else if (num < 0) {
  alert("Negative Number");
} else {
  alert("Zero");
}

// Question 04
let vowels = ;
let character = prompt("Enter any character");
if (character === vowels) {
  alert(`True ${vowels} is a Vowel`);
} else {
  alert(`False`);
}

// Question 05
let password = "correct";
let user = prompt(`Enter a correct password`)

if (user !== password) {
  alert(`Please enter your password`);
} else if (user === password){
  alert(`Correct! The password you
entered matches the original password`)
} else {
  alert(`Incorrect password`)
}

// Question 06

let greeting;
let hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else{
greeting = "Good evening";
}
console.log(greeting)

// Question 07

var time=+prompt('Please enter time in 24 hours \n clock format like: 1900 = 7pm.');
if(time>=000 && time<1200){
    alert('Good Morning')
}
else if(time>=1200 && time<1700){
    alert('Good Afternoon')
}
else if(time >=1700 && time<2100){
    alert('Good Evening')
}
else if(time >=2100 && time<=2359){
    alert('Good Night')
}
else{
    alert('Invalid Input')
}
// CHAPTER 14-16

// 01.
let studentNames = [];

// 02.
let obj = {}

// 03.
let fruits = ["apple", "mango", "Banana"];

// 04.
let num = [1, 2, 3, 4];

// 05.
let boolean = [true, false];

// 06.
let mixedArrays = ["apple", 3, false, null, undefined];

// 07.
let qualificaions = [
  "ssc",
  "hsc",
  "bsc",
  "bs",
  "bcom",
  "ms",
  "m.fill",
  "p.h.d",
];
document.write(`<h2>Qualifications</h2>`);
document.write(
  `<ol><li>${qualificaions[0]}</li><li>${qualificaions[1]}</li><li>${qualificaions[2]}</li><li>${qualificaions[3]}</li><li>${qualificaions[4]}</li><li>${qualificaions[5]}</li><li>${qualificaions[6]}</li><li>${qualificaions[7]}</li><ol/>`,
);

// 08.
let studentNames = ["Ayesha", "Abdullah", "Usman"];
let score = [320, 230, 480];
let totalMarks = 500;
document.write(`Score of ${studentNames[0]} is ${score[0]}. Percentage is ${score[0] / totalMarks * 100}% <br/>`)
document.write(`Score of ${studentNames[1]} is ${score[1]}. Percentage is ${score[1] / totalMarks * 100}% <br/>`)
document.write(`Score of ${studentNames[2]} is ${score[2]}. Percentage is ${score[2] / totalMarks * 100}% <br/>`)

// 09.
let color = ["red", "orange", "green"];

// a
let user = prompt("What color did you wants to add to the begining");
document.write(color)
color.unshift(user)
document.write(`<br/>After adding your color: ${color}`)

// b
let user = prompt("What color did you wants to add to the end");
document.write(color);
color.push(user);
document.write(`<br/>After adding your color: ${color}`);

// c
document.write(color)
color.unshift("yellow","brown")
document.write(`<br/>${color}`)

// d
color.shift()
document.write(`<br/>${color}`)

// e
color.pop()
document.write(`<br/>${color}`)

// f
let colors= ["pink","orange","brown","yellow"]
document.write(colors);
let userIdx;
let userClr;
colors.splice(userIdx = +prompt("At which index you wants to add the color"), 0, userClr = prompt("Enter a color name"));
document.write(`<br/>After update: ${colors}`);

// g
let colors = ["pink", "orange", "brown", "yellow"];
document.write(colors);
let userIdx;
let userClr;
colors.splice(userIdx = +prompt("Which color you wants to delete"), userClr = prompt("Enter a color index"));
document.write(`<br/>After update: ${colors}`);

// 10.

let studentScores = [320, 230, 480, 120];
document.write(studentScores)
document.write("<br/>")
studentScores.sort();
document.write(`Order score of students ${studentScores}`);

// 11.

let cities = ["Karachi", "lahore", "peshawar", "gilgit", "islamabad"];
document.write(`Cities list: <br/>`);
document.write(cities);
document.write(`<br/> Selected Cities list: <br/>`);
let newCities = cities.slice(2,4)
document.write(newCities);

// 12.

let str = ["This", "is", "my", "cat"];
console.log(`Array:`);
console.log(str);
let newStr = str.toString();
newStr=newStr.replaceAll(","," ")
console.log(`String:`);
console.log(newStr);

// 13.
let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
let out;
document.write(`Devices: <br/> ${devices} <br/>`)
out=devices.shift()
document.write(`Out: <br/> ${out} <br/>`)
out=devices.shift()
document.write(`Out: <br/> ${out} <br/>`)
out=devices.shift()
document.write(`Out: <br/> ${out} <br/>`)
out=devices.shift()
document.write(`Out: <br/> ${out} <br/>`)

// 14.
let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
let out;
document.write(`Devices: <br/> ${devices} <br/>`)
out=devices.pop()
document.write(`Out: <br/> ${out} <br/>`)
out=devices.pop()
document.write(`Out: <br/> ${out} <br/>`)
out=devices.pop()
document.write(`Out: <br/> ${out} <br/>`)
out=devices.pop()
document.write(`Out: <br/> ${out} <br/>`)

// 15.
let phoneManufac = ["apple", "samsung", "motrolla", "nokia", "sony", "haier"];
document.write(
  `<select>
    <option disabled selected>Select Menu</option>
  <option>${phoneManufac[0]}</option>
  <option>${phoneManufac[1]}</option>
  <option>${phoneManufac[2]}</option>
  <option>${phoneManufac[3]}</option>
  <option>${phoneManufac[4]}</option>
  <option>${phoneManufac[5]}</option>
  </select>`);