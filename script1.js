// How to compare two JSON having the same properties without order?
  
let obj1 = {
  name:"person 1",
  age:5
} 
let obj2 = {
  age:5,
  name:"person 1"
}

let result1 = obj1.name===obj2.name;
let result2 = obj1.age===obj2.age;
let output = result1===result2;

console.log(output); 