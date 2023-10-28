interface User {
  dbid: number;
  user: string;
  email: string;
  id: number;
  googleId?: number;
}
/* Some times you have to need added a new element in site the interface but you can't do it, thats why you have to carete a new interface but it also can't do you, so you have to open thus interface where you added the value, its very very simple , just call the interface and use the value */
interface User {
  github: string;
}
const person: User = {
  dbid: 22217,
  user: "rakibul",
  email: "rakibul@gmail.com",
  id: 2527,
  github: "flocky05",
};
person.email = "amirtumi@gmail.com";
console.log(person);

/*  Benifites of typescript Type checking,Contract definition,Documentation and readability,Reusability,Code navigation and autocompletion,Easier refactoring */
