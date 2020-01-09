import { User } from './models/User';

const user = new User({ name: 'new record', age: 1 });

// console.log(user.get('name'));

// Reminder on how 'this' work in js

const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  }
};

const printColor = colors.printColor;
printColor();
