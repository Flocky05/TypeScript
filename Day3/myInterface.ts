interface User {
  dbid: number;
  user: string;
  email: string;
  id: number;
  googleId?: number;
}
const person: User = {
  dbid: 22217,
  user: "rakibul",
  email: "rakibul@gmail.com",
  id: 2527,
};
person.email = "amirtumi@gmail.com";
console.log(person);
