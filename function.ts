/* you have to declear the num insite the parameter  */
function addtwoNumber(num1: number, num2: number) {
  if (num1 > 5) return num1 + 10;
  return num1 + num2;
}
console.log(addtwoNumber(1, 3));

/* write a function that return all the string lowerCase to UpperCase */

function toUpper(val: string) {
  return val.toUpperCase();
}
console.log(toUpper("My name is Rakibul Islam. what is your name?"));
