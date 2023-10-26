/* This way may use in js but we don't use like this way in typeScript */
/* const Person = {
  name: "Rakibul",
  mail: "md.rakibul.islam.0501@gmail.com",
  age: 23,
  student: false,
};
console.log(Person);

function creatUser(name: string, email: string) {
  return "I don't know you brother";
}

console.log(creatUser("rakibul", "what the hell"));
 */
/* CreateCourse a function */

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "Reactjs", isPaid: true };
}

/* Now start with object that is used in typeScript this is most important like below */

type User = {
  name: string;
  email: string;
  age: number;
  isStudent: false;
};

function createUser(user: User): User {
  return {
    name: "rakibul",
    email: "rakibul@gmail.com",
    age: 230,
    isStudent: false,
  };
}

console.log(
  createUser({
    name: "rakibul",
    email: "rakibul@gmail.com",
    age: 23,
    isStudent: false,
  })
);
