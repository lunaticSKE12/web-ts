import { User } from './models/User';

const user = new User({ name: 'new record', age: 1 });

// A quick reminder on accessors

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullname(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person('firstname', 'lasename');
// console.log(person.fullname);

user.on('change', () => {
  console.log('user was change');
});
