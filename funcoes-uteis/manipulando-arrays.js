var array = "Ned Jon Robb Bran Rickon".split(' ');
console.log(array.toString());
console.log(array.join(' | '));

array.push("Sansa");
array.unshift("Sansa");

console.log(array);

array.pop();

console.log(array);


array[1] = "Jon Snow";

console.log(array);


var slice = array.slice(3,4);
console.log(slice);

var splice = array.slice(1,1,"Arya", "Sansa");
console.log(splice);

array.splice(3,1);
console.log(array);

array = array.concat(splice);
console.log(array);