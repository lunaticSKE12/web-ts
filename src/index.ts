import { User } from './models/User';

const user = new User({ name: 'new record', age: 1 });

// user.set({ name: 'NEW NAME', age: 999 });

user.save();
