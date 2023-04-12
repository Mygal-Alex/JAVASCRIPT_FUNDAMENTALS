let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let {first:f,third:x,fifth="Name №5"} = names;

console.log(f); 
console.log(x); 
console.log(fifth); 