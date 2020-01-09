import { User } from './models/User';

const user = new User({ id: 1 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
});

user.set({ name: 'New name' });

user.on('change', () => {
  console.log(user);
});

user.fetch();
