// alert("hoodbyair");
// alert("hello");
document.getElementById("rada").innerText = "goog";
function myfunction() {
  document.getElementById("h1para").innerHTML = "hello UNIVERSE";
}
function ourfunction() {
  document.getElementById("h3para").innerHTML = "Goodbye";
}
function h4function() {
  document.getElementById("h4para").innerHTML = "LENAIYARRA";
}
function radafunction() {
  document.getElementById("rada").innerHTML = "<h3>Goodbye</h3>";
}
function readyfunction() {
  alert("closing soon");
  document.getElementById("alert").innerHTML = "YOU HAVE ACTIVATED";
}
function function1() {
  window.alert(6 + 5);
}
function func3() {
  document.writeln(5 + 2);
}

let x, y;
x = 5;
y = 3;
function numero() {
  document.getElementById("vvd").innerHTML = "lonate";
}
console.log(5 + 6);
function inac() {
  alert("this site is now active");
  document.getElementById("inac").innerHTML = "now rolling";
}
let lastname, lastName;
lastname = "brad";
lastName = "Lena";

let f = 5;
let k = 20;
let r = f + k;

function ghost() {
  document.getElementById("ghost").innerHTML = "no more ghost";
  console.log(r);
}
const pi = 3.14;
console.log(pi);
function bmw() {
  let carname = "Mercedes";
  document.getElementById("bmw").innerHTML = carname;
}
document.getElementById("rada").innerHTML = "audi";
// Select the toggle button
const toggleButton = document.getElementById("toggle-dark-mode");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save theme in localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
const PI = 3.14;

function functioncars() {
  const cars = ["merc", "bmw", "poad"];
  cars[2] = "gwagon";
  cars[3] = "rolls";

  cars.push("panamera");
  document.getElementById("cars").innerHTML = cars;
}

const coupes = { type: "3series", model: "m340i", color: "black" };
document.getElementById("bmwseries").innerHTML =
  "type of car is " + coupes.model;

function series() {
  document.getElementById("bmwseries").innerHTML =
    "type of car is " + coupes.color;
}
{
  const cars = ["c-class", "e-class", "e63s"];
  cars[0] = "g-class";
  cars.push("g63");
  console.log(cars);
  document.getElementById("ourseries").innerHTML = cars;
}
{
  const x = 18;
  let vote = x >= 18 ? "Yes" : "No";
  console.log(vote);
}
let loggedin = false;
loggedin ||= console.log("Welcome User 1");

{
  let loggedin = true;
  loggedin && console.log("True info");
}
{
  let x;
  x ??= 5;
  console.log(x);
}
{
  let username;
  username ||= "guest";
  console.log(username);
}
{
  let x = myfunction(4, 3);
  function myfunction(a, b) {
    return a * b;
  }
  console.log(x);
}
myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log(myObj.name);

let person = {
  firstname: "Brad",
  secondname: "Lena",
  fullname: function () {
    return this.firstname + " " + this.secondname;
  },
};
console.log(person.fullname());

person.name = function () {
  return (this.secondname + this.firstname).toUpperCase();
};
console.log(person.name());
