// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "ÖMER",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [1, "admin"],
// };

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 10,
  AUTHOR = 100,
}

const person = {
  name: "ÖMER",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("super_admin");
//person.role[1] = 10;
//person.role =[ 1,'admin'];

let favoritesActivities:  [];

favoritesActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("ADMIN");
}
