// Write a JavaScript program to find the area of a triangle where 
// three sides are 5, 6, 7. 

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

// area of triangle = (base * height) / 2 - base & height
// area of triangle = (base + height + width) / 2 - base, height & width

const baseValue = parseInt(prompt("Enter the base value:"));
const heightValue = parseInt(prompt("Enter the height value:"));
const widthValue = parseInt(prompt("Enter the width value:"));

const areaValue = (baseValue + heightValue + widthValue) / 2;

console.log(`The result is: ${areaValue}`);


/* --------------------------------------------------------------------------------- */