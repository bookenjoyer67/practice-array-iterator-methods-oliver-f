let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
fruits.push("orange");
console.log(fruits);
fruits.shift();
fruits.unshift("grape");
console.log(fruits);

let colors = ["red", "blue", "green", "blue", "yellow"];
console.log(colors);
console.log(colors.includes("blue"));
console.log(colors.indexOf("blue"));
console.log(colors.lastIndexOf("blue"));

let teamA = ["Alice", "Bob"];
console.log(teamA);
let teamB = ["Charlie", "Diana"];
console.log(teamB);

let allTeams = teamA.concat(teamB);

console.log(allTeams);

let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let middleNumbers = numbers.slice(1, 3);
console.log(middleNumbers);
numbers.splice(3, 4);
console.log(numbers);

numbers.push(60, 70);
console.log(numbers);

let scores = [85, 70, 95, 60, 75]
console.log(scores);
scores.sort((a, b) => a - b);
console.log(scores);
scores.reverse();
console.log(scores);
