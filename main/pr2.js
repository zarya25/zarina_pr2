'use strict'
// первое задание

let admin;
let name;
name = "Джон";
admin = name;
alert(admin);

// второе задание

let city = prompt('Введите название города');
let year = prompt('Введите год образования');
let people = prompt('Введите население');
alert( `Возраст города ${2024 - year}`);
alert(`Городу ${city} исполнилось  ${2024 - year} лет с момента его образования. Население - ${people} человек.`)


// третье задание

function calculateCircleArea(r) {
    const PI = 3.14; 
    const area = PI * r * r; 
    return area;
  }
  
  const radius = 5; 
  const circleArea = calculateCircleArea(radius);
  console.log("Площадь круга с радиусом " + radius + " равна " + circleArea.toFixed(2) + " единиц^2.");
  
// четвертое задание

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

console.log("Сумма: " + (num1 + num2));
console.log("Разность: " + (num1 - num2));
console.log("Частное: " + (num1 / num2));
console.log("Произведение: " + (num1 * num2));

