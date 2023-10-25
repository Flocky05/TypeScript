/* as a normal function you can create an arro function */

const person = (s: string): string => {
  return "My Friend name is Mehedi and Emon";
};
console.log(person("HU"));

/* make a function and use array and good practices */
let heros = ["IronMan", "Thor", "SpiderMan", "BatMan"];
const Hero = (yes: string) => {
  heros.map((hero): string => {
    return `I like the most ${hero}`;
  });
};

console.log(Hero("yes"));
