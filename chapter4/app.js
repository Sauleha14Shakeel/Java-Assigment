// Question 01
let name, age, city;

// Question 02
// legal names
let userName;
let _age;
let Number1;
let $dollor;
let cityName;

// illegal names (just examples, don't run)
// let var;
// let user name; 
// let 123number;
// let @email;

// Question 03
let rules = "Rules for naming JS variable";
document.write("<h1>" + rules + "</h1>");

let example = "$my_1stVariable";
document.write("Variables name can only contain numbers, $, and _. For example: " + example);

let variable = "name, $name, _name";
document.write("<br/>");
document.write("Variables must begin with a letter, $ or _. For example: " + variable);

let variableCase = "sensitive";
document.write("<br/>");
document.write("Variables name are case " + variableCase);

let js = "keyword";
document.write("<br/>");
document.write("Variables name should not be JS " + js);